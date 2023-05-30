class ThrowableObject extends MovableObject {
  images_bottleRotation = [
    ""
  ];
  images_bottleSplash = [
    "img/soldier/Explosion/00_Explosion.png",
    "img/soldier/Explosion/01_Explosion.png",
    "img/soldier/Explosion/02_Explosion.png",
    "img/soldier/Explosion/03_Explosion.png",
    "img/soldier/Explosion/04_Explosion.png",
    "img/soldier/Explosion/05_Explosion.png",
    "img/soldier/Explosion/06_Explosion.png",
    "img/soldier/Explosion/07_Explosion.png",
    "img/soldier/Explosion/08_Explosion.png",
  ];

  constructor(x, y) {
    super().loadImage(
      "img/soldier/Explosion/00_Explosion.png",
    );
    this.loadImages(this.images_bottleRotation);
    this.loadImages(this.images_bottleSplash);
    this.x = x;
    this.y = y;
    this.height = 150;
    this.width = 150;
    this.animate();
    this.throw();
  }

  animate() {
    setStoppableInterval(() => {
      if (this.y > 180) this.playAnimation(this.images_bottleSplash);
      else this.playAnimation(this.images_bottleRotation);
    }, 100);
  }

  throw() {
    this.speedY = 20;
    this.applyGravity();
    setStoppableInterval(() => {
      this.x += 10;
    }, 25);
  }
}
