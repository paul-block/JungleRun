class World {
  character = new Character();
  endboss = new Endboss();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  camera_y = 20;
  levelSize = 100;
  StatusBarHealth = new StatusBarHealth();
  StatusBarBottle = new StatusBarBottle();
  StatusBarCoins = new StatusBarCoins();
  StatusBarEndboss = new StatusBarEndboss();
  Score = new Score();
  ComboPupup = new ComboPupup();
  ExtraPoints = new ExtraPoints();
  showExtraPoints = false;
  throwableObjects = [];
  doAnimation = true;
  clearIntervals;
  collectedCoinsStorage = [];
  collectedThrowingStars = [];
  droppedBombs = [];
  bullets = [];
  superBullets = [];
  characterIsFlying = false;
  shootingAnimationFlying = [];
  hurtImg = [];
  scaleChange = 0.005;
  scale = 1;
  scoreManager;
  username;

  constructor(canvas, keyboard, clearIntervals, gameOver, username, scoreManager) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.clearIntervals = clearIntervals;
    this.gameOver = gameOver;
    this.username = username;
    this.scoreManager = scoreManager;
    this.draw();
    this.setWorld();
    this.run();
  }

  run() {
    setStoppableInterval(() => {
      this.checkShoot();
      this.swordAttack();
      this.checkCollissionBombs();
    }, 50);

    setStoppableInterval(() => {
      this.checkCollisionPlatform();
      this.checkCollisions();
      this.checkCollectingCoins();
      this.checkCollectingThrowingStars();
      this.checkThrowingStarCollisionWithEnemies();
      this.checkOnTopOfEnemy();
      this.checkBackgroundMusic();
      this.stopGame();
      this.flyingEnemyDropBomb();
      this.checkCollisionBullets();
      this.shootFlyMode();
    }, 50);
  }

  checkBackgroundMusic() {
    if (this.bgMusicWanted()) {
      this.character.audio_background.play();
      this.character.audio_background.volume = 0.25;
    } else this.character.audio_background.pause();
  }

  stopGame() {
    if (this.character.energy == 0) {
      this.character.playAnimation(this.character.images_dying);
      this.setScore();
      setTimeout(() => {
        this.showEndscreen();
      }, 450);
    }
  }

  setScore() {
    const scoreObject = { [this.username]: this.Score.score };
    this.scoreManager.updateScore('scores', 'n2M7UreVn3hZLmfAKw4A', scoreObject);
  }

  checkCollissionBombs() {
    this.droppedBombs.forEach((bomb) => {
      if (this.character.isColliding(bomb)) {
        this.character.hit();
        this.StatusBarHealth.setPercentage(this.character.energy);
      }
      let deadEnemies = [];
      this.level.enemies.forEach((enemy) => {
        if (enemy.isColliding(bomb)) {
          enemy.hitted = true;
          enemy.hp -= 10;
          if (enemy.hp <= 0 && !enemy.dead) {
            enemy.dead = true;
            enemy.playAnimation(enemy.image_dead, () => {
              deadEnemies.push(enemy);
            });
          }
        }
      });
      deadEnemies.forEach((deadEnemy) => {
        let deadEnemyIndex = this.level.enemies.indexOf(deadEnemy);
        if (deadEnemyIndex !== -1) {
          this.level.enemies.splice(deadEnemyIndex, 1);
        }
      });
    });
  }

  // checkEndbossKilled() {
  //   this.collectedThrowingStars.forEach((star) => {
  //     if (this.endboss.isColliding(star)) {
  //       this.endboss.hitted();
  //     }
  //   });

  //   if (this.endboss.isColliding(this.character)) {
  //     this.character.hit();
  //   }
  // }


  checkCollisionBullets() {
    if (this.character.isFlying && !this.character.superBullet) {
      for (let bulletIndex = this.bullets.length - 1; bulletIndex >= 0; bulletIndex--) {
        let bullet = this.bullets[bulletIndex];
        for (let enemyIndex = this.level.flyingEnemiesWave.length - 1; enemyIndex >= 0; enemyIndex--) {
          let enemy = this.level.flyingEnemiesWave[enemyIndex];
          if (enemy.isColliding(bullet)) {
            this.ExtraPoints.addScore(10);
            enemy.hitted = true;
            enemy.hp -= 10;
            this.bullets.splice(bulletIndex, 1);
            enemy.playAnimation(enemy.image_dead);

            setTimeout(() => {
              this.level.flyingEnemiesWave.splice(enemyIndex, 1);
            }, 50);

            break;  // Stoppt die innere Schleife, da das Projektil bereits entfernt wurde
          }
        }
      }
    }

    // Super Bullets

    if (this.character.isFlying && this.character.superBullet) {
      for (let bulletIndex = this.superBullets.length - 1; bulletIndex >= 0; bulletIndex--) {
        let bullet = this.superBullets[bulletIndex];
        for (let enemyIndex = this.level.flyingEnemiesWave.length - 1; enemyIndex >= 0; enemyIndex--) {
          let enemy = this.level.flyingEnemiesWave[enemyIndex];
          if (enemy.isColliding(bullet)) {
            enemy.hitted = true;
            enemy.hp -= 20;
            this.superBullets.splice(bulletIndex, 1);

            if (enemy.hp <= 0) {
              enemy.playAnimation(enemy.image_dead);
              this.ExtraPoints.addScore(10);
              setTimeout(() => {
                this.level.flyingEnemiesWave.splice(enemyIndex, 1);
              }, 50);
            }
            break;  // Stoppt die innere Schleife, da das Projektil bereits entfernt wurde
          }
        }
      }
    }
  }

  flyingEnemyDropBomb() {
    if (this.level.flyingEnemies[0].drop) {
      let bomb = new Bomb(
        this.level.flyingEnemies[0].x + 50,
        this.level.flyingEnemies[0].y + 80
      );
      this.droppedBombs.push(bomb);
      setTimeout(() => {
        this.droppedBombs.splice(bomb, 1);
      }, 1000);
    }
  }

  // checkEndbossKilled() {
  //   this.collectedThrowingStars.forEach((star) => {
  //     if (this.endboss.isColliding(star)) {
  //       this.endboss.energy -= 1;
  //       this.endboss.hitted = true;
  //       if (this.endboss.hitted)
  //         this.endboss.playAnimation(this.endboss.images_attack);
  //     }
  //   });
  //   if (this.character.isColliding(this.endboss)) {
  //     this.character.hit();
  //     this.StatusBarHealth.setPercentage(this.character.energy);
  //   }
  // }

  flyingEnemyDropBomb() {
    this.level.flyingEnemies.forEach((enemy) => {
      if (enemy.drop) {
        enemy.playAnimation(enemy.images_attack);
        let bomb = new Bomb(
          enemy.x + 100,
          enemy.y + 100
        );
        this.droppedBombs.push(bomb);
        setTimeout(() => {
          this.droppedBombs.splice(bomb, 1);
        }, 1000);
      }
    });
  }

  checkOnTopOfEnemy() {
    if (!this.character.isFlying) {

      for (let i = 0; i < this.level.enemies.length; i++) {
        const enemy = this.level.enemies[i];
        if (
          this.character.isColliding(enemy) &&
          this.character.isAboveGround() && this.character.speedY < 0
        ) {
          let hittedEnemy = this.level.enemies.indexOf(enemy);
          if (!this.level.enemies[hittedEnemy].hitted && !this.character.mute)
            this.level.enemies[hittedEnemy].audio_hitted.play();
          this.level.enemies[hittedEnemy].hitted = true;
          this.level.enemies[hittedEnemy].hp = 0;
          this.level.enemies[hittedEnemy].dead = true;
          if (this.level.enemies[hittedEnemy].hp = 0) {
            setTimeout(() => {
              this.level.enemies.splice(hittedEnemy, 1);
            }, 2000);
          }
        }
      }
    }
  }

  swordAttack() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && this.character.attack() && !enemy.dead) {
        enemy.hitted = true;
        let hittedEnemy = this.level.enemies.indexOf(enemy);

        enemy.hp -= 10;

        if (enemy.hp == 0) {
          // this.ComboPupup.show(500, 300);
          this.level.enemies[hittedEnemy].dead = true;
          this.Score.addScore(10);
          setTimeout(() => {
            this.level.enemies.splice(hittedEnemy, 1);
          }, 2000);
        }
      }
    });
  }

  checkCollectingCoins() {
    if (!this.character.isFlying) {
      let coinsToRemove = [];
      this.level.coins.forEach((coin, index) => {
        if (this.character.isColliding(coin)) {
          if (!this.character.mute) this.character.audio_collectBottle.play();
          this.character.collectedCoins++;
          this.collectedCoinsStorage.push(coin);
          this.StatusBarCoins.setPercentage(this.character.collectedCoins);
          coinsToRemove.push(index);
        }
      });
      for (let i = coinsToRemove.length - 1; i >= 0; i--) {
        this.level.coins.splice(coinsToRemove[i], 1);
      }
    }
  }

  checkCollectingThrowingStars() {
    if (!this.character.isFlying) {
      let starsToRemove = [];
      this.level.collectableThrowingStars.forEach((star, index) => {
        if (this.character.isColliding(star)) {
          if (!this.character.mute) this.character.audio_collectCoin.play();
          this.character.collectedThrowingStars++;
          starsToRemove.push(index);
        }
      });
      for (let i = starsToRemove.length - 1; i >= 0; i--) {
        this.level.collectableThrowingStars.splice(starsToRemove[i], 1);
      }
    }
  }

  // checkCollisionPlatform() {
  //   if (!this.character.isFlying) {
  //     this.character.isOnPlatform = false;
  //     this.level.platforms1.forEach((platform) => {
  //       if (this.character.isColliding(platform) && !this.keyboard.space && !this.character.isFlying) {
  //         this.character.isOnPlatform = true;
  //         this.character.y = 277;
  //         this.character.speedY = 0;
  //       }
  //     });
  //     this.level.platforms2.forEach((platform) => {
  //       if (this.character.isColliding(platform) && !this.keyboard.space && !this.character.isFlying) {
  //         this.character.isOnPlatform = true;
  //         this.character.y = 118;
  //         this.character.speedY = 0;
  //       }
  //     });
  //     this.level.platforms3.forEach((platform) => {
  //       if (this.character.isColliding(platform) && !this.keyboard.space && !this.character.isFlying) {
  //         this.character.isOnPlatform = true;
  //         this.character.y = -42;
  //         this.character.speedY = 0;
  //       }
  //     });
  //   }
  // }

  checkCollisionPlatform() {
    const jumpCooldown = .35;
    const currentTime = Date.now() / 1000;

    if (!this.character.isFlying) {
      this.character.isOnPlatform = false;

      this.level.platforms1.forEach((platform) => {
        if (this.character.isColliding(platform) && !this.keyboard.space && !this.character.isFlying && currentTime - this.character.jumpStartTime > jumpCooldown) {
          this.character.isOnPlatform = true;
          this.character.y = 277;
        }
      });

      this.level.platforms2.forEach((platform) => {
        if (this.character.isColliding(platform) && !this.keyboard.space && !this.character.isFlying && currentTime - this.character.jumpStartTime > jumpCooldown) {
          this.character.isOnPlatform = true;
          this.character.y = 118;
        }
      });

      this.level.platforms3.forEach((platform) => {
        if (this.character.isColliding(platform) && !this.keyboard.space && !this.character.isFlying && currentTime - this.character.jumpStartTime > jumpCooldown) {
          this.character.isOnPlatform = true;
          this.character.y = -42;
        }
      });
    }
  }


  shootFlyMode() {
    if (this.characterIsFlying && this.keyboard.space && this.character.machineGunTimepassed()) {
      if (!this.character.superBullet) {
        let bullet = new Bullet(
          this.character.x + 165,
          this.character.y + 174
        );
        this.bullets.push(bullet);
      }
      if (this.character.superBullet) {
        let superBullet = new SuperBullet(
          this.character.x + 165,
          this.character.y + 163
        );
        this.superBullets.push(superBullet);
      }

      let shoot = new ShootAnimation(
        this.character.x + 162,
        this.character.y + 155
      );
      let shoot2 = new ShootAnimation(
        this.character.x + 130,
        this.character.y + 156
      );
      this.shootingAnimationFlying.push(shoot, shoot2);
      setTimeout(() => {
        if (!this.character.superBullet)
          this.bullets.splice(bullet, 1);
      }, 1500);
      setTimeout(() => {
        this.shootingAnimationFlying.splice(shoot, 2);
      }, 10);
    }
  }

  checkCollisions() {
    if (this.character.isFlying) {
      this.level.flyingEnemiesWave.forEach((enemy) => {
        if (this.characterCanCollide(enemy)) {
          this.character.hit();
          document.getElementById('canvas').classList.add('hurt');
          setTimeout(() => {
            document.getElementById('canvas').classList.remove('hurt');
          }, 225);
          this.Score.minusScore(5);
          let hurtsound = this.character.audio_hurt;
          hurtsound.playbackRate = 3;
          if (!this.character.mute) hurtsound.play();
          this.StatusBarHealth.setPercentage(this.character.energy);
        }
      });
    }
    if (!this.character.isFlying) {
      this.level.enemies.forEach((enemy) => {
        if (this.characterCanCollide(enemy)) {
          this.character.hit();
          document.getElementById('canvas').classList.add('hurt');
          setTimeout(() => {
            document.getElementById('canvas').classList.remove('hurt');
          }, 225);
          this.Score.minusScore(5);
          let hurtsound = this.character.audio_hurt;
          hurtsound.playbackRate = 3;
          if (!this.character.mute) hurtsound.play();
          this.StatusBarHealth.setPercentage(this.character.energy);
        }
      });
    }
  }

  checkThrowingStarCollisionWithEnemies() {
    this.collectedThrowingStars.forEach((star) => {
      this.level.enemies.forEach((enemy, y) => {
        if (star.isColliding(enemy) && !enemy.dead) {
          enemy.hitted = true;
          this.collectedThrowingStars.splice(star);
          let hittedEnemy = this.level.enemies.indexOf(enemy);
          enemy.hp -= 10;
          if (enemy.hp == 0) {
            this.level.enemies[hittedEnemy].dead = true;
            this.level.enemies.splice(hittedEnemy, 1);
          }
        }
      });
    });
  }

  checkShoot() {
    if (this.keyboard.d && this.character.collectedThrowingStars > 0 && this.character.timepassed()) {
      let star = new AttackThrowingStar(
        this.character.x + 120,
        this.character.y + 100
      );
      this.collectedThrowingStars.push(star);
      this.character.collectedThrowingStars--;
    }
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.translate(this.camera_x, 0);

    // camera Y integrieren
    if (!this.character.isFlying) {
      this.addObjectsToMap(this.level.backgroundObjects);
      this.addObjectsToMap(this.level.platforms1);
      this.addObjectsToMap(this.level.platforms2);
      this.addObjectsToMap(this.level.platforms3);
      // this.addObjectsToMap(this.level.endboss);
    }

    if (this.character.doAnimation) {
      this.addToMap(this.character);
      this.ctx.translate(-this.camera_x, 0);
      this.addStatusbars();
      this.ctx.translate(this.camera_x, 0);
      this.addAllObjects(this.ctx);
      this.ctx.translate(-this.camera_x, 0);
      this.throwableObjects;
      let self = this;

      this.scale += this.scaleChange;
      if (this.scale > 1.075 || this.scale < 1) {
        this.scaleChange = -this.scaleChange;
      }

      requestAnimationFrame(function () {
        self.draw();
      });
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  addScoreToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.drawScore(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }


  bgMusicWanted() {
    return gameOver === false && !this.character.mute && !this.character.muteBg;
  }

  showEndscreen() {
    document.getElementById("endScreenContainer").classList.remove('d-none');

    this.clearIntervals();
    // this.resetLvl();
  }

  stopUnstoppableMode() {
    this.character.unstoppable = false;
    this.character.collectedCoins = 0;
    this.character.speed = 4;
    document.getElementById("unstoppable").classList.add("d-none");
    this.StatusBarCoins.setPercentage(this.character.collectedCoins);
  }

  characterCanBeHurt() {
    return (
      !this.character.isAboveGround() &&
      !this.character.canGetDamage() &&
      !this.character.attack() ||
      this.character.isFlying && !this.character.isHurt()
    );
  }

  addAllObjects(ctx) {
    if (!this.character.superBullet) {
      this.addObjectsToMap(this.bullets);
    }
    if (this.character.superBullet) {
      this.addObjectsToMap(this.superBullets);
    }
    this.addObjectsToMap(this.shootingAnimationFlying);
    this.addObjectsToMap(this.hurtImg);
    if (!this.character.isFlying) {
      this.addObjectsToMap(this.level.flyingEnemies);
      this.addObjectsToMap(this.droppedBombs);
      this.addObjectsToMap(this.level.enemies);

      this.addObjectsToMap(this.level.collectableThrowingStars);
      this.level.coins.forEach(coin => {
        ctx.save();
        ctx.translate(coin.x + coin.width / 2, coin.y + coin.height / 2); // Verschieben Sie den Ursprung zur Mitte der Münze
        ctx.scale(this.scale, this.scale);
        ctx.translate(-(coin.x + coin.width / 2), -(coin.y + coin.height / 2)); // Verschieben Sie den Ursprung zurück
        this.addToMap(coin); // Zeichnen Sie die Münze
        ctx.restore();
      });
      this.addObjectsToMap(this.collectedThrowingStars);
    }

    //  Start Flymode
    if (this.character.isFlying) {
      if (this.character.y > 100 && !this.character.readyToFly) {
        this.character.y -= 10;
        setTimeout(() => {
          this.character.readyToFly = true;
        }, 500);
      }
      if (this.character.readyToFly) this.addObjectsToMap(this.level.flyingEnemiesWave);

    }
  }

  addStatusbars() {
    this.addToMap(this.StatusBarHealth);
    // this.addToMap(this.StatusBarCoins);
    this.addScoreToMap(this.Score);
    // this.addScoreToMap(this.ComboPupup);
    // this.addScoreToMap(this.Diamonds);
  }

  characterCanCollide(enemy) {
    return (
      this.character.isColliding(enemy) &&
      !enemy.dead &&
      this.characterCanBeHurt()
    );
  }
}
