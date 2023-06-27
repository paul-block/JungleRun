class Cloud extends MovableObject {
  y;
  x;
  height = 700;
  width = 800;

  constructor(x) {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.animate();
    this.x = x;
    this.y = 600;
  }

  move() {
    if (this.y < -300) this.y += 10;
    if (this.y > -300) this.y -= 10;
  }

  animate() {
    setInterval(() => {
      this.move();
    }, 50);

  }
}
