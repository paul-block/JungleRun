class Enemy2 extends MovableObject {
    height = 120;
    width = 120;
    y = 290;
    x = 800 + Math.random() * 3000;
    images_attack = [
        "img/MonsterV2/Attack/skeleton-Attack_0.png",
        "img/MonsterV2/Attack/skeleton-Attack_1.png",
        "img/MonsterV2/Attack/skeleton-Attack_2.png",
        "img/MonsterV2/Attack/skeleton-Attack_3.png",
        "img/MonsterV2/Attack/skeleton-Attack_4.png",
        "img/MonsterV2/Attack/skeleton-Attack_5.png",
        "img/MonsterV2/Attack/skeleton-Attack_6.png",
        "img/MonsterV2/Attack/skeleton-Attack_7.png",
        "img/MonsterV2/Attack/skeleton-Attack_8.png",
        "img/MonsterV2/Attack/skeleton-Attack_9.png",
        "img/MonsterV2/Attack/skeleton-Attack_10.png",
        "img/MonsterV2/Attack/skeleton-Attack_11.png",
        "img/MonsterV2/Attack/skeleton-Attack_12.png",
        "img/MonsterV2/Attack/skeleton-Attack_13.png",
        "img/MonsterV2/Attack/skeleton-Attack_14.png",
        "img/MonsterV2/Attack/skeleton-Attack_15.png",
        "img/MonsterV2/Attack/skeleton-Attack_16.png",
        "img/MonsterV2/Attack/skeleton-Attack_17.png",
        "img/MonsterV2/Attack/skeleton-Attack_18.png",
        "img/MonsterV2/Attack/skeleton-Attack_19.png",
        "img/MonsterV2/Attack/skeleton-Attack_20.png",
        "img/MonsterV2/Attack/skeleton-Attack_21.png",
    ];

    images_walking = [
        "img/MonsterV2/Walk/skeleton-Walk_0.png",
        "img/MonsterV2/Walk/skeleton-Walk_1.png",
        "img/MonsterV2/Walk/skeleton-Walk_2.png",
        "img/MonsterV2/Walk/skeleton-Walk_3.png",
        "img/MonsterV2/Walk/skeleton-Walk_4.png",
        "img/MonsterV2/Walk/skeleton-Walk_5.png",
        "img/MonsterV2/Walk/skeleton-Walk_6.png",
        "img/MonsterV2/Walk/skeleton-Walk_7.png",
        "img/MonsterV2/Walk/skeleton-Walk_8.png",
        "img/MonsterV2/Walk/skeleton-Walk_9.png",
        "img/MonsterV2/Walk/skeleton-Walk_10.png",
        "img/MonsterV2/Walk/skeleton-Walk_11.png",
        "img/MonsterV2/Walk/skeleton-Walk_12.png",
        "img/MonsterV2/Walk/skeleton-Walk_13.png",
        "img/MonsterV2/Walk/skeleton-Walk_14.png",
        "img/MonsterV2/Walk/skeleton-Walk_15.png",
        "img/MonsterV2/Walk/skeleton-Walk_16.png",
        "img/MonsterV2/Walk/skeleton-Walk_17.png",
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

    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 0
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
        }, 90);
    }
}