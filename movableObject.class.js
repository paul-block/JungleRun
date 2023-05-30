class MovableObject extends DrawableObject {
  speed = 0.2;
  otherDirection = false;
  speedY = 0;
  acceleration = 5;
  energy = 100;
  lastHit = 0;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  dead = false;

  playAnimation(images) {
    let i = this.currentImg % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImg++;
  }

  playAnimationOnce(images) {
    let i = this.currentImg % images.length;
    if (i === images.length - 1) {
      return;
    }
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImg++;
  }

  gameOver() {
    let endScreen = document.getElementById("endScreenContainer");
    endScreen.style.display = "block";
  }

  isOnTop(mo) {
    return (
      this.y + this.height &&
      this.x + this.width >= mo.y + mo.height &&
      mo.x + mo.width
    );
  }

  isColliding(mo) {
    return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
  }

  hit() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Differenz in ms
    timepassed = timepassed / 1000; // Differenz in sekunden
    return timepassed < 1;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  applyGravity() {
    setStoppableInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) return true;
    if (this instanceof Bomb) return this.y < 340;
    // else return this.y < 180;
  }

  jump() {
    this.speedY = 40;
  }
}
