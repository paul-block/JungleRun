class AttackThrowingStar extends MovableObject {
    image_throwingStar = [
        "img/main character sprites/Character 01/Png/Projectile/P1.png",
        "img/main character sprites/Character 01/Png/Projectile/P1_01.png",
        "img/main character sprites/Character 01/Png/Projectile/P1_02.png",
        "img/main character sprites/Character 01/Png/Projectile/P1_03.png",
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x, y) {
        super().loadImage(
            "img/main character sprites/Character 01/Png/Projectile/P1.png",
        );
        this.loadImages(this.image_throwingStar);
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.animate();
        this.shoot();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.image_throwingStar);
        }, 100);
    }

    shoot() {
        setStoppableInterval(() => {
            this.x += 10;
        }, 25);
    }
}
