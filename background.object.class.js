class BackgroundObject extends MovableObject {
  width = 1000;
  height = 700;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
  }
}
