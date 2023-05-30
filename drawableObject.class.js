class DrawableObject {
  x = 120;
  y = 0;
  height = 150;
  width = 100;
  img;
  imageCache = {};
  currentImg = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this.canDrawFrame()
    ) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.left - this.offset.right,
        this.height - this.offset.top - this.offset.bottom
      );
      ctx.stroke();
    }
  }

  canDrawFrame() {
    return this instanceof Character ||
      this instanceof Enemy1 ||
      this instanceof Enemy2 ||
      this instanceof Enemy3 ||
      this instanceof CollectableObject ||
      this instanceof PlatformObject;
  }
}
