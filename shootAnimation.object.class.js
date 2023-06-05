
class ShootAnimation extends MovableObject {
    image_shoot = [
        "img/OtherAssets/1.png"
    ];


    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x, y) {
        super().loadImage(
            "img/OtherAssets/1.png"
        );
        this.loadImages(this.image_shoot);
        this.x = x;
        this.y = y;
        this.height = 45;
        this.width = 45;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.image_shoot);
        }, 100);
    }

    // shoot() {
    //     setStoppableInterval(() => {
    //         this.x += 10;
    //     }, 25);
    // }
}
