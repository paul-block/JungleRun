class SuperBullet extends MovableObject {
    image_superBullet = [
        "img/itemBullet.png"
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x, y) {
        super().loadImage(
            "img/itemBullet.png"
        );
        this.loadImages(this.image_superBullet);
        this.x = x;
        this.y = y;
        this.height = 30;
        this.width = 30;
        this.animate();
        this.shoot();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.y < 280) {
                this.playAnimation(this.image_superBullet);
            }
        }, 100);
    }

    shoot() {
        setStoppableInterval(() => {
            this.x += 20;
        }, 25);
    }
}
