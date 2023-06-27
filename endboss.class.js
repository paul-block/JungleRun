// class Endboss extends MovableObject {
//   height = 280;
//   width = 190;
//   y = 350;
//   x = 719 * 5;
//   energy = 3;
//   offset = {
//     top: 50,
//     left: 5,
//     right: 5,
//     bottom: 10,
//   };
//   hitted = false;

//   images_walking = [
//     "img/endboss/Walk/skeleton-Walk_0.png",
//     "img/endboss/Walk/skeleton-Walk_1.png",
//     "img/endboss/Walk/skeleton-Walk_2.png",
//     "img/endboss/Walk/skeleton-Walk_3.png",
//     "img/endboss/Walk/skeleton-Walk_4.png",
//     "img/endboss/Walk/skeleton-Walk_5.png",
//     "img/endboss/Walk/skeleton-Walk_6.png",
//     "img/endboss/Walk/skeleton-Walk_7.png",
//     "img/endboss/Walk/skeleton-Walk_8.png",
//     "img/endboss/Walk/skeleton-Walk_9.png",
//     "img/endboss/Walk/skeleton-Walk_10.png",
//     "img/endboss/Walk/skeleton-Walk_11.png",
//     "img/endboss/Walk/skeleton-Walk_12.png",
//     "img/endboss/Walk/skeleton-Walk_13.png",
//     "img/endboss/Walk/skeleton-Walk_14.png",
//     "img/endboss/Walk/skeleton-Walk_15.png",
//     "img/endboss/Walk/skeleton-Walk_16.png",
//     "img/endboss/Walk/skeleton-Walk_17.png",
//     "img/endboss/Walk/skeleton-Walk_18.png",
//     "img/endboss/Walk/skeleton-Walk_19.png",
//     "img/endboss/Walk/skeleton-Walk_20.png",
//     "img/endboss/Walk/skeleton-Walk_21.png",
//     "img/endboss/Walk/skeleton-Walk_22.png",
//     "img/endboss/Walk/skeleton-Walk_23.png",
//     "img/endboss/Walk/skeleton-Walk_24.png",
//     "img/endboss/Walk/skeleton-Walk_25.png"
//   ];

//   images_attack = [
//     "img/endboss/Attack/skeleton-Attack_1.png",
//     "img/endboss/Attack/skeleton-Attack_2.png",
//     "img/endboss/Attack/skeleton-Attack_3.png",
//     "img/endboss/Attack/skeleton-Attack_4.png",
//     "img/endboss/Attack/skeleton-Attack_5.png",
//     "img/endboss/Attack/skeleton-Attack_6.png",
//     "img/endboss/Attack/skeleton-Attack_7.png",
//     "img/endboss/Attack/skeleton-Attack_8.png",
//     "img/endboss/Attack/skeleton-Attack_9.png",
//     "img/endboss/Attack/skeleton-Attack_10.png",
//     "img/endboss/Attack/skeleton-Attack_11.png",
//     "img/endboss/Attack/skeleton-Attack_12.png",
//     "img/endboss/Attack/skeleton-Attack_13.png",
//     "img/endboss/Attack/skeleton-Attack_14.png",
//     "img/endboss/Attack/skeleton-Attack_15.png",
//     "img/endboss/Attack/skeleton-Attack_16.png",
//     "img/endboss/Attack/skeleton-Attack_17.png",
//     "img/endboss/Attack/skeleton-Attack_18.png",
//     "img/endboss/Attack/skeleton-Attack_19.png",
//     "img/endboss/Attack/skeleton-Attack_20.png",
//     "img/endboss/Attack/skeleton-Attack_21.png"
//   ];

//   images_idle = [
//     "img/endboss/Idle/skeleton-Idle_0.png",
//     "img/endboss/Idle/skeleton-Idle_1.png",
//     "img/endboss/Idle/skeleton-Idle_2.png",
//     "img/endboss/Idle/skeleton-Idle_3.png",
//     "img/endboss/Idle/skeleton-Idle_4.png",
//     "img/endboss/Idle/skeleton-Idle_5.png",
//     "img/endboss/Idle/skeleton-Idle_6.png",
//     "img/endboss/Idle/skeleton-Idle_7.png",
//     "img/endboss/Idle/skeleton-Idle_8.png",
//     "img/endboss/Idle/skeleton-Idle_9.png",
//     "img/endboss/Idle/skeleton-Idle_10.png",
//     "img/endboss/Idle/skeleton-Idle_11.png",
//     "img/endboss/Idle/skeleton-Idle_12.png",
//     "img/endboss/Idle/skeleton-Idle_13.png",
//     "img/endboss/Idle/skeleton-Idle_14.png",
//     "img/endboss/Idle/skeleton-Idle_15.png",
//     "img/endboss/Idle/skeleton-Idle_16.png",
//     "img/endboss/Idle/skeleton-Idle_17.png"
//   ];

//   image_dead = [
//     "img/DeadSprite/DeadFx_00.png",
//     "img/DeadSprite/DeadFx_01.png",
//     "img/DeadSprite/DeadFx_02.png",
//     "img/DeadSprite/DeadFx_03.png",
//     "img/DeadSprite/DeadFx_04.png",
//     "img/DeadSprite/DeadFx_05.png",
//     "img/DeadSprite/DeadFx_06.png",
//     "img/DeadSprite/DeadFx_07.png",
//     "img/DeadSprite/DeadFx_08.png",
//     "img/DeadSprite/DeadFx_09.png",
//     "img/DeadSprite/DeadFx_10.png",
//     "img/DeadSprite/DeadFx_11.png",
//     "img/DeadSprite/DeadFx_12.png",
//     "img/DeadSprite/DeadFx_13.png",
//     "img/DeadSprite/DeadFx_14.png",
//     "img/DeadSprite/DeadFx_15.png",
//     "img/DeadSprite/DeadFx_16.png",
//     "img/DeadSprite/DeadFx_17.png",
//     "img/DeadSprite/DeadFx_18.png",
//     "img/DeadSprite/DeadFx_19.png",
//     "img/WorldBackground/transparent.png",
//     "img/WorldBackground/transparent.png"
//   ];

//   audio_dying = new Audio("audio/win.mp3");

//   constructor() {
//     super().loadImage(this.images_walking[0]);
//     this.loadImages(this.images_attack);
//     this.loadImages(this.images_idle);
//     this.loadImages(this.images_walking);
//     this.loadImages(this.image_dead);
//     this.checkCondition();
//     this.animate();
//   }

//   animate() {
//     setInterval(() => {
//       if (!this.hitted) this.playAnimation(this.images_walking);
//       if (this.hitted) {
//         this.playAnimation(this.images_attack);
//         this.moveLeft();
//       }
//     }, 50);
//     setInterval(() => {
//       if (this.hp == 0 && this.hitted) {
//         this.speed = 0;
//         this.playAnimationOnce(this.image_dead);
//       }
//     }, 50);
//   }

//   checkCondition() {
//     setInterval(() => {
//       if (!this.hitted && this.energy == 3) this.playAnimation(this.images_idle);
//       if (this.hitted && this.energy < 3) {
//         this.playAnimation(this.images_attack);
//         this.moveLeft();
//         this.changeDirectionRight();
//       }
//       if (this.energy < 3 && this.otherDirection) {
//         this.playAnimation(this.images_attack);
//         this.moveRight();
//         this.changeDirectionLeft();
//       }
//       this.checkIsDead();
//     }, 50);

//   }

//   changeDirectionRight() {
//     setTimeout(() => {
//       this.otherDirection = true;
//     }, 7500);
//   }

//   changeDirectionLeft() {
//     setTimeout(() => {
//       this.otherDirection = false;
//     }, 6000);
//   }
// }
class Endboss extends MovableObject {
  height = 160;
  width = 160;
  y = 470;
  x = 2500;
  isDying = false;
  otherDirection = false;

  images_walking = [
    "img/endboss/Walk/skeleton-Walk_0.png",
    "img/endboss/Walk/skeleton-Walk_1.png",
    "img/endboss/Walk/skeleton-Walk_2.png",
    "img/endboss/Walk/skeleton-Walk_3.png",
    "img/endboss/Walk/skeleton-Walk_4.png",
    "img/endboss/Walk/skeleton-Walk_5.png",
    "img/endboss/Walk/skeleton-Walk_6.png",
    "img/endboss/Walk/skeleton-Walk_7.png",
    "img/endboss/Walk/skeleton-Walk_8.png",
    "img/endboss/Walk/skeleton-Walk_9.png",
    "img/endboss/Walk/skeleton-Walk_10.png",
    "img/endboss/Walk/skeleton-Walk_11.png",
    "img/endboss/Walk/skeleton-Walk_12.png",
    "img/endboss/Walk/skeleton-Walk_13.png",
    "img/endboss/Walk/skeleton-Walk_14.png",
    "img/endboss/Walk/skeleton-Walk_15.png",
    "img/endboss/Walk/skeleton-Walk_16.png",
    "img/endboss/Walk/skeleton-Walk_17.png",
    "img/endboss/Walk/skeleton-Walk_18.png",
    "img/endboss/Walk/skeleton-Walk_19.png",
    "img/endboss/Walk/skeleton-Walk_20.png",
    "img/endboss/Walk/skeleton-Walk_21.png",
    "img/endboss/Walk/skeleton-Walk_22.png",
    "img/endboss/Walk/skeleton-Walk_23.png",
    "img/endboss/Walk/skeleton-Walk_24.png",
    "img/endboss/Walk/skeleton-Walk_25.png"
  ];

  images_attack = [
    "img/endboss/Attack/skeleton-Attack_1.png",
    "img/endboss/Attack/skeleton-Attack_2.png",
    "img/endboss/Attack/skeleton-Attack_3.png",
    "img/endboss/Attack/skeleton-Attack_4.png",
    "img/endboss/Attack/skeleton-Attack_5.png",
    "img/endboss/Attack/skeleton-Attack_6.png",
    "img/endboss/Attack/skeleton-Attack_7.png",
    "img/endboss/Attack/skeleton-Attack_8.png",
    "img/endboss/Attack/skeleton-Attack_9.png",
    "img/endboss/Attack/skeleton-Attack_10.png",
    "img/endboss/Attack/skeleton-Attack_11.png",
    "img/endboss/Attack/skeleton-Attack_12.png",
    "img/endboss/Attack/skeleton-Attack_13.png",
    "img/endboss/Attack/skeleton-Attack_14.png",
    "img/endboss/Attack/skeleton-Attack_15.png",
    "img/endboss/Attack/skeleton-Attack_16.png",
    "img/endboss/Attack/skeleton-Attack_17.png",
    "img/endboss/Attack/skeleton-Attack_18.png",
    "img/endboss/Attack/skeleton-Attack_19.png",
    "img/endboss/Attack/skeleton-Attack_20.png",
    "img/endboss/Attack/skeleton-Attack_21.png"
  ];

  images_idle = [
    "img/endboss/Idle/skeleton-Idle_0.png",
    "img/endboss/Idle/skeleton-Idle_1.png",
    "img/endboss/Idle/skeleton-Idle_2.png",
    "img/endboss/Idle/skeleton-Idle_3.png",
    "img/endboss/Idle/skeleton-Idle_4.png",
    "img/endboss/Idle/skeleton-Idle_5.png",
    "img/endboss/Idle/skeleton-Idle_6.png",
    "img/endboss/Idle/skeleton-Idle_7.png",
    "img/endboss/Idle/skeleton-Idle_8.png",
    "img/endboss/Idle/skeleton-Idle_9.png",
    "img/endboss/Idle/skeleton-Idle_10.png",
    "img/endboss/Idle/skeleton-Idle_11.png",
    "img/endboss/Idle/skeleton-Idle_12.png",
    "img/endboss/Idle/skeleton-Idle_13.png",
    "img/endboss/Idle/skeleton-Idle_14.png",
    "img/endboss/Idle/skeleton-Idle_15.png",
    "img/endboss/Idle/skeleton-Idle_16.png",
    "img/endboss/Idle/skeleton-Idle_17.png"
  ];

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

  offset = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 0
  };
  hitted = false;
  audio_hitted = new Audio("audio/chickenHitted.mp3");
  hp = 20;


  constructor(x) {
    super().loadImage(this.images_walking[0]);
    this.loadImages(this.images_walking);
    this.loadImages(this.image_dead);
    this.loadImages(this.images_idle);
    this.loadImages(this.images_attack);
    this.animate();
    this.speed = 0.3 + Math.random() * 0.25;
    this.x = x;
  }

  // changeDirection() {
  //   setInterval(() => {
  //     this.otherDirection = !this.otherDirection;

  //   }, 5000);

  //   if (this.otherDirection)
  //     this.moveRight();
  //   else this.moveLeft();
  // }

  animate() {
    setInterval(() => {
      if (!this.hitted) {
        this.playAnimation(this.images_idle);
      };
    }, 30);

    setInterval(() => {
      if (this.hitted) {
        if (this.speed <= 0.5) {
          this.speed = this.speed + Math.random() * 3.5;
        }
        this.height = 200;
        this.width = 200;
        this.y = 440;
        // this.x = this.x - 30; x a-achse etwas nach links verschieben außerhalb des intervals
        this.playAnimation(this.images_attack);
        this.moveLeft();
      }
    }, 20);

    setInterval(() => {
      if (this.hp <= 0 && !this.isDying) {
        this.isDying = true;
        this.playAnimationOnce(this.image_dead);
        this.speed = 0;
      }
    }, 50);
  }
}
