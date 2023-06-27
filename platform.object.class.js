class PlatformObject extends MovableObject {
    width = 180;
    height = 158;
    top = this.y - this.height;

    offset = {
        top: 140,
        left: 20,
        right: 25,
        bottom: 0,
    };

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}
