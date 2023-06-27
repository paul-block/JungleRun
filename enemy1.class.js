class Enemy1 extends MovableObject {
  height = 200;
  width = 250;
  y = 20;
  x = 400 + Math.random() * 3000;

  image_dead = [
    "img/DeadSprite/DeadFx_00.png",
    "img/DeadSprite/DeadFx_01.png",
    "img/DeadSprite/DeadFx_02.png",
    "img/DeadSprite/DeadFx_03.png",
    "img/DeadSprite/DeadFx_04.png",
    "img/DeadSprite/DeadFx_05.png",
    "img/DeadSprite/DeadFx_06.png",
    "img/DeadSprite/DeadFx_07.png",
    "img/DeadSprite/DeadFx_08.png",
    "img/DeadSprite/DeadFx_09.png",
    "img/DeadSprite/DeadFx_10.png",
    "img/DeadSprite/DeadFx_11.png",
    "img/DeadSprite/DeadFx_12.png",
    "img/DeadSprite/DeadFx_13.png",
    "img/DeadSprite/DeadFx_14.png",
    "img/DeadSprite/DeadFx_15.png",
    "img/DeadSprite/DeadFx_16.png",
    "img/DeadSprite/DeadFx_17.png",
    "img/DeadSprite/DeadFx_18.png",
    "img/DeadSprite/DeadFx_19.png",
    "img/WorldBackground/transparent.png",
    "img/WorldBackground/transparent.png"
  ];

  images_flying = [
    'img/FlyingMonster/Moving/Moving_01.png',
    'img/FlyingMonster/Moving/Moving_02.png',
    'img/FlyingMonster/Moving/Moving_03.png',
    'img/FlyingMonster/Moving/Moving_04.png',
    'img/FlyingMonster/Moving/Moving_05.png',
    'img/FlyingMonster/Moving/Moving_06.png',
    'img/FlyingMonster/Moving/Moving_07.png',
    'img/FlyingMonster/Moving/Moving_08.png',
    'img/FlyingMonster/Moving/Moving_09.png',
    'img/FlyingMonster/Moving/Moving_10.png',
    'img/FlyingMonster/Moving/Moving_11.png',
    'img/FlyingMonster/Moving/Moving_12.png',
    'img/FlyingMonster/Moving/Moving_13.png',
    'img/FlyingMonster/Moving/Moving_14.png',
    'img/FlyingMonster/Moving/Moving_15.png',
    'img/FlyingMonster/Moving/Moving_16.png',
    'img/FlyingMonster/Moving/Moving_17.png',
    'img/FlyingMonster/Moving/Moving_18.png',
    'img/FlyingMonster/Moving/Moving_19.png'
  ];

  images_attack = [
    'img/FlyingMonster/LoseBomb/LoseBomb_01.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_02.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_03.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_04.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_05.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_06.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_07.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_08.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_09.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_10.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_11.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_12.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_13.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_14.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_15.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_16.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_17.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_18.png',
    'img/FlyingMonster/LoseBomb/LoseBomb_19.png'
  ];

  offset = {
    top: 45,
    left: 90,
    right: 90,
    bottom: 45
  };
  hitted = false;
  dead = false;
  audio_hitted = new Audio("audio/chickenHitted.mp3");
  hp = 20;
  drop = false;

  constructor(bombTime, y, speed = 0.5 + Math.random() * 0.25) {
    super().loadImage("img/FlyingMonster/Moving/Moving_01.png");
    this.loadImages(this.images_flying);
    this.loadImages(this.image_dead);
    this.loadImages(this.images_attack);
    this.animate();
    this.speed = speed;
    this.y = y;
    setInterval(() => {
      this.setRandomDrop();
    }, bombTime);
  }

  // animate() {
  //   setInterval(() => {
  //     this.moveLeft();
  //   }, 1000 / 60);

  //   setInterval(() => {
  //     if (!this.hitted) this.playAnimation(this.images_walking);
  //     else if (this.hp == 10 && this.hitted) {
  //       if (this.speed <= 0.5) {
  //         this.speed = this.speed + Math.random() * 0.1;
  //       }
  //       this.playAnimation(this.images_attack);
  //     }
  //     else if (this.hp == 0 && this.dead) {
  //       this.playAnimationOnce(this.image_dead);
  //       this.speed = 0;
  //     }
  //   }, 100);
  // }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      if (!this.hitted) this.playAnimation(this.images_flying);
      else if (this.hp == 10 && this.hitted) {
        if (this.speed <= 0.5) {
          this.speed = this.speed + Math.random() * 0.1;
        }
        this.playAnimation(this.images_attack);
      }
      else if (this.hp == 0 && this.dead) {
        this.playAnimationOnce(this.image_dead);
        this.speed = 0;
      }
    }, 50);
  }

  setRandomDrop() {
    this.drop = true;

    // Setzen Sie "drop" nach 200ms auf false
    setTimeout(() => {
      this.drop = false;
    }, 20);
  }
}
