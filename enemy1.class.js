class Enemy1 extends MovableObject {
  height = 150;
  width = 150;
  y = 20;
  x = 400 + Math.random() * 3000;
  images_walking = [
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_00.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_01.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_02.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_03.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_04.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_05.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_06.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_07.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_08.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_09.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_10.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_11.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_12.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_13.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_14.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_15.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_16.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_17.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_18.png",
    "img/Mons 4/IdleFly and Move/IdleFlyandMove_19.png"
  ];

  images_attack = [
    "img/Mons 4/Attack/Attack_00.png",
    "img/Mons 4/Attack/Attack_01.png",
    "img/Mons 4/Attack/Attack_02.png",
    "img/Mons 4/Attack/Attack_03.png",
    "img/Mons 4/Attack/Attack_04.png",
    "img/Mons 4/Attack/Attack_05.png",
    "img/Mons 4/Attack/Attack_06.png",
    "img/Mons 4/Attack/Attack_07.png",
    "img/Mons 4/Attack/Attack_08.png",
    "img/Mons 4/Attack/Attack_09.png",
    "img/Mons 4/Attack/Attack_10.png",
    "img/Mons 4/Attack/Attack_11.png",
    "img/Mons 4/Attack/Attack_12.png",
    "img/Mons 4/Attack/Attack_13.png",
    "img/Mons 4/Attack/Attack_14.png",
    "img/Mons 4/Attack/Attack_15.png",
    "img/Mons 4/Attack/Attack_16.png",
    "img/Mons 4/Attack/Attack_17.png",
    "img/Mons 4/Attack/Attack_18.png",
    "img/Mons 4/Attack/Attack_19.png",
    "img/Mons 4/Attack/Attack_20.png",
    "img/Mons 4/Attack/Attack_21.png",
    "img/Mons 4/Attack/Attack_22.png",
    "img/Mons 4/Attack/Attack_23.png",
    "img/Mons 4/Attack/Attack_24.png"
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
    top: 40,
    left: 30,
    right: 30,
    bottom: 40
  };
  hitted = false;
  dead = false;
  audio_hitted = new Audio("audio/chickenHitted.mp3");
  hp = 20;
  drop = false;

  constructor(bombTime) {
    super().loadImage("img/Mons 4/IdleFly and Move/IdleFlyandMove_00.png");
    this.loadImages(this.images_walking);
    this.loadImages(this.image_dead);
    this.loadImages(this.images_attack);

    this.animate();
    this.speed = 0.5 + Math.random() * 0.25;
    setInterval(() => {
      this.setRandomDrop();
    }, bombTime);
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      if (!this.hitted) this.playAnimation(this.images_walking);
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
    }, 100);
  }

  setRandomDrop() {
    this.drop = true;
    console.log('Drop ist nun: ' + this.drop);

    // Setzen Sie "drop" nach 200ms auf false
    setTimeout(() => {
      this.drop = false;
      console.log('Drop ist nun: ' + this.drop);
    }, 20);
  }
}
