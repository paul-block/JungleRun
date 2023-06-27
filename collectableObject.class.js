class CollectableObject extends MovableObject {
  images_coins = ["img/crystal.png"];
  height = 60;
  width = 60;
  offset = {
    top: 0,
    left: 10,
    right: 10,
    bottom: 0,
  };
  collected = false;
  scale = 1;

  constructor(x, y) {
    super();

    this.loadImage("img/crystal.png");
    this.loadImages(this.images_coins);
    this.animate();
    // this.animateScale();

    this.x = x;
    this.y = y;
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.images_coins);
    }, 250);
  }

  // getScale() {
  //   return this.scale;
  // }

  // animateScale() {
  //   setInterval(() => {
  //     if (this.scale >= 1.05 || this.scale <= 1) {
  //       this.scaleSpeed = -this.scaleSpeed;
  //     }
  //     this.scale += this.scaleSpeed;
  //   }, 100);
  // }
}


