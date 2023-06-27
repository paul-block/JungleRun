class Hurt extends MovableObject {
    images_hurt = [
        // "img//hurt0.png",
        // "img//hurt1.png",
        // "img//hurt2.png",
        // "img//hurt3.png",
        "img//hurt4.png",
    ];
    height = 700;
    width = 1600;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };
    collected = false;
    y = 0;
    constructor(x) {
        super();
        this.loadImage("img//hurt4.png");
        this.loadImages(this.images_hurt);
        this.x = x;
        // this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.images_hurt);
        }, 250);
    }
}
