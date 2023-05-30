class CollectableBottle extends MovableObject {
  images_collectableBottle = [
    "img/soldier/Explosion/00_Explosion.png",
  ];
  height = 450;
  width = 450;
  offset = {
    top: 150,
    left: 150,
    right: 150,
    bottom: 150,
  };

  constructor(x) {
    super();
    this.loadImage("img/soldier/Explosion/00_Explosion.png");
    this.x = x;
    this.y = -200;
  }
}
