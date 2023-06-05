class Bullet extends MovableObject {
    image_bullet = [
        "img/OtherAssets/Bullets.png"
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x, y) {
        super().loadImage(
            "img/OtherAssets/Bullets.png"
        );
        this.loadImages(this.image_bullet);
        this.x = x;
        this.y = y;
        this.height = 10;
        this.width = 10;
        this.animate();
        this.shoot();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.y < 280) {
                this.playAnimation(this.image_bullet);
                console.log(this.y);
            }
        }, 100);
    }

    shoot() {
        setStoppableInterval(() => {
            this.x += 20;
        }, 25);
    }
}
