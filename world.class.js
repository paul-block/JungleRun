class World {
  character = new Character();
  endboss = new Endboss();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  levelSize = 100;
  StatusBarHealth = new StatusBarHealth();
  StatusBarBottle = new StatusBarBottle();
  StatusBarCoins = new StatusBarCoins();
  StatusBarEndboss = new StatusBarEndboss();
  throwableObjects = [];
  doAnimation = true;
  clearIntervals;
  collectedCoinsStorage = [];
  collectedThrowingStars = [];
  droppedBombs = [];

  constructor(canvas, keyboard, clearIntervals, gameOver) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.clearIntervals = clearIntervals;
    this.gameOver = gameOver;

    this.draw();
    this.setWorld();
    this.run();
  }

  run() {
    setStoppableInterval(() => {
      this.checkShoot();
      this.swordAttack();
      this.checkCollissionBombs();
    }, 250);

    setStoppableInterval(() => {
      this.checkCollisionPlatform();
      this.checkCollisions();
      this.checkCollectingCoins();
      this.checkCollectingThrowingStars();
      this.checkThrowingStarCollisionWithEnemies();
      this.checkOnTopOfEnemy();
      this.checkBackgroundMusic();
      this.character.checkIdleMode();
      this.stopGame();
      this.flyingEnemyDropBomb();
      this.consoleCheck();
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
      setTimeout(() => {
        this.showEndscreen();
      }, 450);
    }
    if (this.endboss.energy == 0) {
      setTimeout(() => {
        this.showEndscreen();
      }, 2000);
    }
  }

  checkUnstoppable() {
    if (this.character.collectedCoins === 12) this.character.unstoppable = true;
    if (this.character.unstoppable === true) {
      document.getElementById("unstoppable").classList.remove("d-none");
      this.character.speed = 6;
      setTimeout(() => {
        this.stopUnstoppableMode();
      }, 3000);
    }
  }

  consoleCheck() {
    console.log("funktioniert", this.level.flyingEnemies[0].drop);
  }

  // ENEMIES FLY IN EIGENES PARAMETER IN LEVEL GEBEN UND ARRAY IN LEVEL 1
  // COLLISION BOMBS MIT CHARACTER 

  checkCollissionBombs() {
    this.droppedBombs.forEach((bomb) => {
      if (this.character.isColliding(bomb)) {
        this.character.hit();
        this.StatusBarHealth.setPercentage(this.character.energy);
        console.log("bomb hit");
      }
      this.level.enemies.forEach((enemy) => {
        if (enemy.isColliding(bomb)) {
          enemy.hitted = true;
          console.log("enemie hitted with bomb");
          let hittedEnemy = this.level.enemies.indexOf(enemy);
          enemy.hp -= 10;
          setTimeout(() => {
            if (enemy.hp <= 0) {
              this.level.enemies.splice(hittedEnemy, 1);
            }
          }, 800);
        }
      });
    });
  }

  // flyingEnemyDropBomb() {
  //   if (this.level.flyingEnemies[0].drop) {
  //     let bomb = new Bomb(
  //       this.level.flyingEnemies[0].x + 50,
  //       this.level.flyingEnemies[0].y + 80
  //     );
  //     this.droppedBombs.push(bomb);
  //     setTimeout(() => {
  //       this.droppedBombs.splice(bomb, 1);
  //     }, 1000);
  //   }
  // }


  flyingEnemyDropBomb() {
    this.level.flyingEnemies.forEach((enemy) => {
      if (enemy.drop) {
        let bomb = new Bomb(
          enemy.x + 50,
          enemy.y + 80
        );
        this.droppedBombs.push(bomb);

        setTimeout(() => {
          this.droppedBombs.splice(bomb, 1);
        }, 1000);
      }
    });
  }

  checkOnTopOfEnemy() {
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
      }
    }
  }

  swordAttack() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && this.character.attack() && !enemy.dead) {
        enemy.hitted = true;
        let hittedEnemy = this.level.enemies.indexOf(enemy);
        console.log(enemy.hp);
        enemy.hp -= 10;
        console.log(enemy.hp);
        if (enemy.hp == 0) {
          this.level.enemies[hittedEnemy].dead = true;
        }
      }
    });
  }

  checkCollectingCoins() {
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        if (!this.character.mute) this.character.audio_collectCoin.play();
        this.character.collectedCoins++;
        this.collectedCoinsStorage.push(coin);
        this.StatusBarCoins.setPercentage(this.character.collectedCoins);
        this.level.coins.splice(coin, 1);
      }
    });
  }

  checkCollectingThrowingStars() {
    this.level.collectableThrowingStars.forEach((star) => {
      if (this.character.isColliding(star)) {
        if (!this.character.mute) this.character.audio_collectCoin.play();
        this.character.collectedThrowingStars++;
        this.level.collectableThrowingStars.splice(star, 1);
      }
    });
  }

  // checkCollisionPlatform() {
  //   this.level.platforms.forEach((platform) => {
  //     if (this.character.y + this.character.height == platform.y + platform.height
  //       && this.character.x > platform.x &&
  //       this.character.x + this.character.width < platform.x + platform.width) {
  //       console.log("hitted");
  //     }
  //   });
  // }

  checkCollisionPlatform() {
    this.level.platforms.forEach((platform) => {
      if (this.character.isColliding(platform))
        console.log("platform contact");
      if (this.character.isOnTop(platform)) {
        this.character.isOnPlatform = true;
        this.character.y = platform.y - this.character.y;
      }
      if (!this.character.isColliding(platform)) {
        this.character.isOnPlatform = false;
        this.character.y = 200;
      }
    });
  }

  // checkCollisionPlatform() {
  //   this.level.platforms.forEach((platform) => {
  //     if (this.character.isColliding(platform) && this.character.isOnTop(platform)) {
  //       console.log("platform contact");
  //       this.character.isOnPlatform = true;
  //       this.character.y = platform.y - this.character.y;
  //     }
  //     if (this.character.isOnPlatform && !this.character.isColliding(platform)) {
  //       this.character.isOnPlatform = false;
  //       this.character.y = 200;
  //     }
  //     else if (!this.character.isColliding(platform) && !this.character.isOnTop(platform)) {
  //       this.character.isOnPlatform = false;
  //       this.character.y = 200;
  //     }
  //   });
  // }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.characterCanCollide(enemy)) {
        this.character.hit();
        let hurtsound = this.character.audio_hurt;
        hurtsound.playbackRate = 3;
        if (!this.character.mute) hurtsound.play();
        this.StatusBarHealth.setPercentage(this.character.energy);
      }
    });
  }

  // checkThrowingStarCollisionWithEnemies() {
  //   this.collectedThrowingStars.forEach((star) => {
  //     this.level.enemies.forEach((enemy, y) => {
  //       if (star.isColliding(enemy)) {
  //         this.collectedThrowingStars.splice(star);
  //         let hittedEnemy = this.level.enemies.indexOf(enemy);
  //         console.log(hittedEnemy);
  //         this.level.enemies.splice(hittedEnemy, 1);
  //       }
  //     });
  //   });
  // }

  checkThrowingStarCollisionWithEnemies() {
    this.collectedThrowingStars.forEach((star) => {
      this.level.enemies.forEach((enemy, y) => {
        if (star.isColliding(enemy) && !enemy.dead) {
          enemy.hitted = true;
          this.collectedThrowingStars.splice(star);
          let hittedEnemy = this.level.enemies.indexOf(enemy);
          console.log(enemy.hp);
          enemy.hp -= 10;
          console.log(enemy.hp);
          if (enemy.hp == 0) {
            this.level.enemies[hittedEnemy].dead = true;
          }
        }
      });
    });
  }

  checkShoot() {
    if (this.keyboard.d && this.character.collectedThrowingStars > 0) {
      let star = new AttackThrowingStar(
        this.character.x + 100,
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
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.platforms);
    if (this.character.doAnimation) {
      this.addToMap(this.character);
      this.ctx.translate(-this.camera_x, 0);
      this.addStatusbars();
      this.ctx.translate(this.camera_x, 0);
      this.addAllObjects();
      this.ctx.translate(-this.camera_x, 0);
      let self = this;
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
    document.getElementById("endScreenContainer").style.display = "block";
    this.clearIntervals();
    this.resetLvl();
    this.character.audio_background.pause();
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
      !this.character.isHurt() &&
      !this.character.attack()
    );
  }

  addAllObjects() {
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.flyingEnemies);
    this.addObjectsToMap(this.level.collectableThrowingStars);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.collectedThrowingStars);
    this.addObjectsToMap(this.droppedBombs);
  }

  addStatusbars() {
    this.addToMap(this.StatusBarHealth);
    this.addToMap(this.StatusBarCoins);
  }

  characterCanCollide(enemy) {
    return (
      this.character.isColliding(enemy) &&
      !enemy.dead &&
      this.characterCanBeHurt()
    );
  }
}
