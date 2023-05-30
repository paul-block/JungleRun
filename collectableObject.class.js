class CollectableObject extends MovableObject {
  images_coins = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];
  height = 120;
  width = 120;
  offset = {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
  };
  collected = false;

  constructor(x) {
    super();
    this.loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.images_coins);
    this.animate();
    this.x = x;
    this.y = 170;
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.images_coins);
    }, 250);
  }
}
