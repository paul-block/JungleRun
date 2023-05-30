class CollectableThrowingStar extends MovableObject {
    image_throwingStar = [
        "img/main character sprites/Character 01/Png/Projectile/P1.png",
        "img/main character sprites/Character 01/Png/Projectile/P1_01.png",
        "img/main character sprites/Character 01/Png/Projectile/P1_02.png",
        "img/main character sprites/Character 01/Png/Projectile/P1_03.png",
    ];
    height = 50;
    width = 50;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x) {
        super().loadImage(
            "img/main character sprites/Character 01/Png/Projectile/P1.png",
        );
        this.loadImages(this.image_throwingStar);
        this.x = x;
        this.y = 200;
    }
}
