class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 45;
  x = 719 * 5;
  energy = 3;
  speed = 7.5;
  otherDirection = false;
  offset = {
    top: 50,
    left: 5,
    right: 5,
    bottom: 10,
  };
  activated = false;
  images_walking = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  images_alert = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];
  images_attack = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];
  images_hurt = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
  ];
  images_dying = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  audio_dying = new Audio("audio/win.mp3");

  constructor() {
    super().loadImage(this.images_walking[0]);
    this.loadImages(this.images_attack);
    this.loadImages(this.images_dying);
    this.loadImages(this.images_alert);
    this.loadImages(this.images_walking);
    this.loadImages(this.images_hurt);
  }

  checkCondition() {
    if (this.energy == 3) this.playAnimation(this.images_alert);
    if (this.energy < 3 && !this.otherDirection) {
      this.playAnimation(this.images_attack);
      this.moveLeft();
      this.changeDirectionRight();
    }
    if (this.energy < 3 && this.otherDirection) {
      this.playAnimation(this.images_attack);
      this.moveRight();
      this.changeDirectionLeft();
    }
    this.checkIsDead();
  }

  checkIsDead() {
    if (this.energy == 0) {
      this.speed = 0;
      this.playAnimation(this.images_dying);
      if(!world.character.mute) {
        this.audio_dying.play();
      }
    }
  }

  hitted() {
    this.playAnimation(this.images_hurt);
    this.energy--;
  }

  changeDirectionRight() {
    setTimeout(() => {
      this.otherDirection = true;
    }, 7500);
  }

  changeDirectionLeft() {
    setTimeout(() => {
      this.otherDirection = false;
    }, 6000);
  }
}
