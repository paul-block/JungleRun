class Enemy4 extends MovableObject {
    height = 80;
    width = 110;
    y = 350;
    x = 600 + Math.random() * 3000;
    images_walking = [
        "img/enemies/Char03/Walk/skeleton-Walk_0.png",
        "img/enemies/Char03/Walk/skeleton-Walk_1.png",
        "img/enemies/Char03/Walk/skeleton-Walk_2.png",
        "img/enemies/Char03/Walk/skeleton-Walk_3.png",
        "img/enemies/Char03/Walk/skeleton-Walk_4.png",
        "img/enemies/Char03/Walk/skeleton-Walk_5.png",
        "img/enemies/Char03/Walk/skeleton-Walk_6.png",
        "img/enemies/Char03/Walk/skeleton-Walk_7.png",
        "img/enemies/Char03/Walk/skeleton-Walk_8.png",
        "img/enemies/Char03/Walk/skeleton-Walk_9.png",
        "img/enemies/Char03/Walk/skeleton-Walk_10.png",
        "img/enemies/Char03/Walk/skeleton-Walk_11.png",
        "img/enemies/Char03/Walk/skeleton-Walk_12.png",
        "img/enemies/Char03/Walk/skeleton-Walk_13.png",
        "img/enemies/Char03/Walk/skeleton-Walk_14.png",
        "img/enemies/Char03/Walk/skeleton-Walk_15.png",
        "img/enemies/Char03/Walk/skeleton-Walk_16.png",
        "img/enemies/Char03/Walk/skeleton-Walk_17.png"
    ];
    image_dead = [
        "img/enemies/DeathFx/skeleton-animation_0.png",
        "img/enemies/DeathFx/skeleton-animation_1.png",
        "img/enemies/DeathFx/skeleton-animation_2.png",
        "img/enemies/DeathFx/skeleton-animation_3.png",
        "img/enemies/DeathFx/skeleton-animation_4.png",
        "img/enemies/DeathFx/skeleton-animation_5.png",
        "img/enemies/DeathFx/skeleton-animation_6.png",
        "img/enemies/DeathFx/skeleton-animation_7.png",
        "img/enemies/DeathFx/skeleton-animation_8.png",
        "img/enemies/DeathFx/skeleton-animation_9.png",
        "img/enemies/DeathFx/skeleton-animation_10.png",
        "img/enemies/DeathFx/skeleton-animation_11.png",
        "img/enemies/DeathFx/skeleton-animation_12.png",
        "img/enemies/DeathFx/skeleton-animation_13.png",
        "img/enemies/DeathFx/skeleton-animation_14.png",
        "img/enemies/DeathFx/skeleton-animation_15.png",
        "img/enemies/DeathFx/skeleton-animation_16.png",
        "img/enemies/DeathFx/skeleton-animation_17.png",
        "img/WorldBackground/transparent.png",
        "img/WorldBackground/transparent.png"
    ];

    images_attack = [
        "img/enemies/Char03/Attack/skeleton-Attack_0.png",
        "img/enemies/Char03/Attack/skeleton-Attack_1.png",
        "img/enemies/Char03/Attack/skeleton-Attack_2.png",
        "img/enemies/Char03/Attack/skeleton-Attack_3.png",
        "img/enemies/Char03/Attack/skeleton-Attack_4.png",
        "img/enemies/Char03/Attack/skeleton-Attack_5.png",
        "img/enemies/Char03/Attack/skeleton-Attack_6.png",
        "img/enemies/Char03/Attack/skeleton-Attack_7.png",
        "img/enemies/Char03/Attack/skeleton-Attack_8.png",
        "img/enemies/Char03/Attack/skeleton-Attack_9.png",
        "img/enemies/Char03/Attack/skeleton-Attack_10.png",
        "img/enemies/Char03/Attack/skeleton-Attack_11.png",
        "img/enemies/Char03/Attack/skeleton-Attack_12.png",
        "img/enemies/Char03/Attack/skeleton-Attack_13.png",
        "img/enemies/Char03/Attack/skeleton-Attack_14.png",
        "img/enemies/Char03/Attack/skeleton-Attack_15.png",
        "img/enemies/Char03/Attack/skeleton-Attack_16.png",
        "img/enemies/Char03/Attack/skeleton-Attack_17.png",
        "img/enemies/Char03/Attack/skeleton-Attack_18.png",
        "img/enemies/Char03/Attack/skeleton-Attack_19.png",
        "img/enemies/Char03/Attack/skeleton-Attack_20.png",
        "img/enemies/Char03/Attack/skeleton-Attack_21.png",
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    hitted = false;
    audio_hitted = new Audio("audio/chickenHitted.mp3");
    hp = 20;


    constructor() {
        super().loadImage("img/Mons 5/Walk/skeleton-Walk_00.png");
        this.loadImages(this.images_walking);
        this.loadImages(this.image_dead);
        this.loadImages(this.images_attack);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.25;
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            if (!this.hitted) this.playAnimation(this.images_walking);
            else if (this.hp == 10 && this.hitted) {
                if (this.speed <= 0.5) {
                    this.speed = this.speed + Math.random() * 0.1;
                }
                this.playAnimation(this.images_attack);
                this.height = 85;
                this.width = 115;
            }
        }, 20);

        setInterval(() => {
            if (this.hp == 0 && this.hitted) {
                this.playAnimationOnce(this.image_dead);
                this.speed = 0;
            }
        }, 50);
    }
}
