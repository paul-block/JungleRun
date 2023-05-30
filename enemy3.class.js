class Enemy3 extends MovableObject {
    height = 150;
    width = 150;
    y = 270;
    x = 600 + Math.random() * 3000;
    images_walking = [
        "img/Mons 5/Walk/skeleton-Walk_00.png",
        "img/Mons 5/Walk/skeleton-Walk_01.png",
        "img/Mons 5/Walk/skeleton-Walk_02.png",
        "img/Mons 5/Walk/skeleton-Walk_03.png",
        "img/Mons 5/Walk/skeleton-Walk_04.png",
        "img/Mons 5/Walk/skeleton-Walk_05.png",
        "img/Mons 5/Walk/skeleton-Walk_06.png",
        "img/Mons 5/Walk/skeleton-Walk_07.png",
        "img/Mons 5/Walk/skeleton-Walk_08.png",
        "img/Mons 5/Walk/skeleton-Walk_09.png",
        "img/Mons 5/Walk/skeleton-Walk_10.png",
        "img/Mons 5/Walk/skeleton-Walk_11.png",
        "img/Mons 5/Walk/skeleton-Walk_12.png",
        "img/Mons 5/Walk/skeleton-Walk_13.png",
        "img/Mons 5/Walk/skeleton-Walk_14.png",
        "img/Mons 5/Walk/skeleton-Walk_15.png",
        "img/Mons 5/Walk/skeleton-Walk_16.png",
        "img/Mons 5/Walk/skeleton-Walk_17.png",
        "img/Mons 5/Walk/skeleton-Walk_18.png",
        "img/Mons 5/Walk/skeleton-Walk_19.png"
    ];
    image_dead = [
        "img/DeadSprite/DeadFx_00.png",
        "img/DeadSprite/DeadFx_01.png",
        "img/DeadSprite/DeadFx_02.png",
        "img/DeadSprite/DeadFx_03.png",
        "img/DeadSprite/DeadFx_04.png",
        "img/DeadSprite/DeadFx_05.png",
        "img/DeadSprite/DeadFx_06.png",
        "img/DeadSprite/DeadFx_07.png",
        "img/DeadSprite/DeadFx_08.png",
        "img/DeadSprite/DeadFx_09.png",
        "img/DeadSprite/DeadFx_10.png",
        "img/DeadSprite/DeadFx_11.png",
        "img/DeadSprite/DeadFx_12.png",
        "img/DeadSprite/DeadFx_13.png",
        "img/DeadSprite/DeadFx_14.png",
        "img/DeadSprite/DeadFx_15.png",
        "img/DeadSprite/DeadFx_16.png",
        "img/DeadSprite/DeadFx_17.png",
        "img/DeadSprite/DeadFx_18.png",
        "img/DeadSprite/DeadFx_19.png",
        "img/WorldBackground/transparent.png",
        "img/WorldBackground/transparent.png"
    ];

    images_attack = [
        "img/Mons 5/Attack/Attack_00.png",
        "img/Mons 5/Attack/Attack_01.png",
        "img/Mons 5/Attack/Attack_02.png",
        "img/Mons 5/Attack/Attack_03.png",
        "img/Mons 5/Attack/Attack_04.png",
        "img/Mons 5/Attack/Attack_05.png",
        "img/Mons 5/Attack/Attack_06.png",
        "img/Mons 5/Attack/Attack_07.png",
        "img/Mons 5/Attack/Attack_08.png",
        "img/Mons 5/Attack/Attack_09.png",
        "img/Mons 5/Attack/Attack_10.png",
        "img/Mons 5/Attack/Attack_11.png",
        "img/Mons 5/Attack/Attack_12.png",
        "img/Mons 5/Attack/Attack_13.png",
        "img/Mons 5/Attack/Attack_14.png",
        "img/Mons 5/Attack/Attack_15.png",
        "img/Mons 5/Attack/Attack_16.png",
        "img/Mons 5/Attack/Attack_17.png",
        "img/Mons 5/Attack/Attack_18.png",
        "img/Mons 5/Attack/Attack_19.png",
        "img/Mons 5/Attack/Attack_20.png",
        "img/Mons 5/Attack/Attack_21.png",
        "img/Mons 5/Attack/Attack_22.png",
        "img/Mons 5/Attack/Attack_23.png",
        "img/Mons 5/Attack/Attack_24.png"
    ];

    offset = {
        top: 45,
        left: 40,
        right: 40,
        bottom: 15
    };
    hitted = false;
    audio_hitted = new Audio("audio/chickenHitted.mp3");
    hp = 20;


    constructor() {
        super().loadImage("img/Mons 2/Walk/Walk_00.png");
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
            }
            else if (this.hp == 0 && this.hitted) {
                this.playAnimationOnce(this.image_dead);
                this.speed = 0;
            }
        }, 20);
    }
}
