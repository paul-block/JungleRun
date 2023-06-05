class Character extends MovableObject {
  height = 250;
  width = 200;
  y = 240;
  speed = 4;
  collectedCoins = 0;
  collectedThrowingStars = 0;
  offset = {
    top: 87,
    left: 70,
    right: 80,
    bottom: 60
  };
  boostHP = false;
  doAnimation = true;
  lastInteraction = 0;
  idle = false;
  shoot = false;
  longIdle = false;
  mute = true;
  muteBg = true;
  isOnPlatform = false;
  landing = false;
  // isJumping = false;

  images_run = [
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_0.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_1.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_2.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_3.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_4.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_5.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_6.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Fast Run/Character-FastRun_7.png"
  ];

  images_walking = [
    // "img/Player/Walk/Walk_000.png",
    // "img/Player/Walk/Walk_001.png",
    // "img/Player/Walk/Walk_002.png",
    // "img/Player/Walk/Walk_003.png",
    // "img/Player/Walk/Walk_004.png",
    // "img/Player/Walk/Walk_005.png",
    // "img/Player/Walk/Walk_006.png",
    // "img/Player/Walk/Walk_007.png",
    // "img/Player/Walk/Walk_008.png",
    // "img/Player/Walk/Walk_009.png",
    // "img/Player/Walk/Walk_010.png",
    // "img/Player/Walk/Walk_011.png",
    // "img/Player/Walk/Walk_012.png",
    // "img/Player/Walk/Walk_013.png",
    // "img/Player/Walk/Walk_014.png",
    // "img/Player/Walk/Walk_015.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_04.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_05.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_06.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_07.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_08.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_09.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_10.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_11.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_12.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_13.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_14.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_15.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_16.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_17.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_18.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_19.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_20.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_21.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_22.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_23.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_24.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_25.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_26.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_27.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_28.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_29.png",
  ];
  images_jumping = [
    // "img/Player/Jump/Jump_000.png",
    // "img/Player/Jump/Jump_001.png",
    // "img/Player/Jump/Jump_002.png",
    // "img/Player/Jump/Jump_003.png",
    // "img/Player/Jump/Jump_004.png",
    // "img/Player/Jump/Jump_005.png",
    // "img/Player/Jump/Jump_006.png",
    // "img/Player/Jump/Jump_007.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_04.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_05.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_06.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_07.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_08.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_09.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_10.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_11.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_12.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_13.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_14.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_15.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_16.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_17.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_18.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Jump/Character-Jump_19.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_00.png"
  ];
  images_idle = [
    // 'img/Player/Idle/Idle_000.png',
    // 'img/Player/Idle/Idle_001.png',
    // 'img/Player/Idle/Idle_002.png',
    // 'img/Player/Idle/Idle_003.png',
    // 'img/Player/Idle/Idle_004.png',
    // 'img/Player/Idle/Idle_005.png',
    // 'img/Player/Idle/Idle_006.png',
    // 'img/Player/Idle/Idle_007.png',
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_04.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_05.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_06.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_07.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_08.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_09.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_10.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_11.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_12.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_13.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_14.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_15.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_16.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_17.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_18.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Idle/Character-Idle_19.png"
  ];

  images_throw = [
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_04.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_05.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_06.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_07.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_08.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_09.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_10.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_11.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_12.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_13.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_14.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_15.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_16.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_17.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_18.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_19.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_20.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_21.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_22.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_23.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_24.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_25.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_26.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_27.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_28.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Shoot/Character-Shoot_29.png",
  ];

  images_hit = [
    // "img/Player/Wak_withGun/WalkWGun_000.png",
    // "img/Player/Wak_withGun/WalkWGun_001.png",
    // "img/Player/Wak_withGun/WalkWGun_002.png",
    // "img/Player/Wak_withGun/WalkWGun_003.png",
    // "img/Player/Wak_withGun/WalkWGun_004.png",
    // "img/Player/Wak_withGun/WalkWGun_005.png",
    // "img/Player/Wak_withGun/WalkWGun_006.png",
    // "img/Player/Wak_withGun/WalkWGun_007.png",
    // "img/Player/Wak_withGun/WalkWGun_008.png",
    // "img/Player/Wak_withGun/WalkWGun_009.png",
    // "img/Player/Wak_withGun/WalkWGun_010.png",
    // "img/Player/Wak_withGun/WalkWGun_011.png",
    // "img/Player/Wak_withGun/WalkWGun_012.png",
    // "img/Player/Wak_withGun/WalkWGun_013.png",
    // "img/Player/Wak_withGun/WalkWGun_014.png",
    // "img/Player/Wak_withGun/WalkWGun_015.png"
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_04.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_05.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_06.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_07.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_08.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_09.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_10.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_11.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_12.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_13.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_14.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_15.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_16.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_17.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_18.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_19.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_20.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_21.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_22.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_23.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_24.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_25.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_26.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_27.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_28.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_29.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_30.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_31.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_32.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_33.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_34.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_35.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_36.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_37.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_38.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Hit/Character-Hit_39.png",
  ];

  images_dying = [
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_04.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_05.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_06.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_07.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_08.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_09.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_10.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_11.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_12.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_13.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_14.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_15.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_16.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_17.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_18.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_19.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_20.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_21.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_22.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_23.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_24.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_25.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_26.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_27.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_28.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_29.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_30.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_31.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_32.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_33.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_34.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_35.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_36.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_37.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_38.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_39.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_40.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_41.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_42.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_43.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_44.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_45.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_46.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_47.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_48.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_49.png",
  ];

  images_hurt = [
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/Dead/Character-Dead_04.png",
  ];

  images_flying = [
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_00.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_01.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_02.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_03.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_04.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_05.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_06.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_07.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_08.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_09.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_10.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_11.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_12.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_13.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_14.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_15.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_16.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_17.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_18.png",
    "img/main character sprites/Character 01/Png/Character Sprite/In flying car/Character-In Car_19.png"
  ];

  image_dead = ["img/soldier/Dead/03_Dead.png"];
  audio_collectCoin = new Audio("audio/coinCollect1.mp3");
  audio_jump = new Audio("audio/cartoon-jump-01.mp3");
  audio_collectBottle = new Audio("audio/collectBottle.mp3");
  audio_smashingBottle = new Audio("audio/bottleSmash.mp3");
  audio_bonusHP = new Audio("audio/chickenHitted.mp3");
  audio_hurt = new Audio("audio/hurt.mp3");
  audio_background = new Audio("audio/background-music.mp3");
  world;


  constructor() {
    super().loadImage("img/main character sprites/Character 01/Png/Character Sprite/Walk/Character-Walk_00.png");
    this.loadImages(this.images_walking);
    this.loadImages(this.images_jumping);
    this.loadImages(this.images_flying);
    this.loadImages(this.images_throw);
    this.loadImages(this.images_hit);
    this.loadImages(this.images_dying);
    this.loadImages(this.images_hurt);
    this.loadImages(this.images_idle);
    this.loadImages(this.images_run);
    this.animate();
    this.applyGravity();
    this.applyFlyMode();
  }

  animate() {
    setStoppableInterval(() => this.moveCharacter(), 600 / 60);
    setStoppableInterval(() => this.playCharacterAnimations(), 20);
  }

  // checkIdleMode() {
  //   setStoppableInterval(() => {
  //     if (this.inactive()) {
  //       let timepassed = new Date().getTime() - this.lastInteraction;
  //       timepassed = timepassed / 1000;
  //       if (timepassed > 3) {
  //         this.idle = true;
  //       }
  //     }
  //   }, 1000);
  // }

  moveCharacter() {
    if (this.canMoveRight()) this.moveRight();
    if (this.canMoveLeft()) this.moveLeft();
    if (this.canJump()) {
      this.jump();
    }
    // für Y Achse kamera einführen und dann gegner in der luft, andere hintergrundmusik 
    // wie der stern bei mario kart (quasi 10sekunden oder so extra points möglich je nachdem
    // man erwischt, danach wieder normal und das teil verschwindet, kiste einsammeln auf 2. Ebene
    // wenn man einsammelt kann man den mondus auf F aktivieren, button oder so aufblinken lassen
    if (this.isFlying) {
      this.moveCameraFly();
    }
    if (!this.flyMode())
      this.moveCamera();
  }

  playCharacterAnimations() {
    if (this.idle || (!this.isAboveGround() && !this.isOnPlatform) ||
      this.isOnPlatform) this.playAnimation(this.images_idle);
    if (this.attack() && !this.flyMode()) this.playAnimation(this.images_hit);
    if (this.canShoot() && !this.flyMode()) this.playAnimation(this.images_throw);
    if (this.flyMode()) this.playAnimation(this.images_flying);
    if (this.isDead() && !this.flyMode()) this.playAnimation(this.images_dying);
    if (this.canRun() && !this.flyMode()) this.playAnimation(this.images_run);
    if (this.isHurt() && !this.flyMode()) this.playAnimationOnce(this.images_hurt);
    if (this.isAboveGround() && !this.isFlying && !this.isOnPlatform ||
      this.jumpOnPlatform())
      this.playAnimation(this.images_jumping);
    if (this.characterIsWalkingOnGround() && !this.flyMode() ||
      this.walkOnPlatform() && !this.flyMode() && !this.canJump())
      this.playAnimation(this.images_walking);
  }

  flyMode() {
    if (this.world.keyboard.f) {
      this.isFlying = true;
      this.world.characterIsFlying = true;
      return true;
    } else if (this.y < 240 && this.landing) {
      this.y += 10;
      this.landing = !this.landing;
    }
    this.isFlying = false;
    this.world.characterIsFlying = false;
  }

  machineGunTimepassed() {
    let timepassed = new Date().getTime() - this.lastShot; // Differenz in ms
    timepassed = timepassed / 1000; // Differenz in sekunden
    if (timepassed > 0.05) {
      this.lastShot = new Date().getTime();
      return true;
    }
    else return false;
  }

  attack() {
    if (this.world.keyboard.e) {
      this.offset = {
        top: 50,
        left: 70,
        right: 40,
        bottom: 60
      };
      return true;
    }
    if (this.world.keyboard.left || this.world.keyboard.right || this.world.keyboard.space)
      this.offset = {
        top: 87,
        left: 70,
        right: 80,
        bottom: 60
      };
    return false;
  }

  walkOnPlatform() {
    if (this.world.keyboard.left || this.world.keyboard.right && this.isOnPlatform) {
      return true;
    } else return false;
  }

  jumpOnPlatform() {
    if (this.world.keyboard.space && this.isOnPlatform) {
      return true;
    } else return false;
  }

  canRun() {
    if (this.world.keyboard.shift && this.world.keyboard.right ||
      this.world.keyboard.shift && this.world.keyboard.left) {
      this.speed = 6;
      return true;
    }
    else {
      this.speed = 4;
      return false;
    }
  }

  canShoot() {
    if (this.world.keyboard.d && this.collectedThrowingStars > 0)
      return true;
    if (this.world.keyboard.left || this.world.keyboard.right)
      return false;
  }

  canMoveRight() {
    return this.world.keyboard.right && this.x < this.world.level.level_end_x;
  }

  moveRight() {
    super.moveRight();
    this.deactivateIdleMode();
    this.otherDirection = false;
    this.lastInteraction = new Date().getTime();
  }

  canMoveLeft() {
    return this.world.keyboard.left && this.x > 0;
  }

  moveLeft() {
    super.moveLeft();
    this.deactivateIdleMode();
    this.otherDirection = true;
    this.lastInteraction = new Date().getTime();
  }

  canJump() {
    return this.world.keyboard.space && !this.isAboveGround() || this.world.keyboard.space && this.isOnPlatform;
  }

  jump() {
    super.jump();
    this.deactivateIdleMode();
    this.lastInteraction = new Date().getTime();
  }

  deactivateIdleMode() {
    this.idle = false;
    this.longIdle = false;
  }

  moveCameraFly() {
    this.world.camera_x = -this.x + 100;
    this.world.camera_y = -this.y + 100;
  }

  moveCamera() {
    return (this.world.camera_x = -this.x + 100);

    //   if (this.isFlying) {
    //     return this.world.camera_x = -this.x + 100, this,w
    //   }
    //   return (this.world.camera_x = -this.x + 100);

    // }
  }

  inactive() {
    return (
      !this.world.keyboard.right ||
      !this.world.keyboard.left ||
      !this.world.keyboard.space
    );
  }

  characterIsWalkingOnGround() {
    return (
      (this.world.keyboard.right ||
        this.world.keyboard.left && !this.isAboveGround())
    );
  }


  // jumpMode() {
  //   if (this.world.keyboard.space && !this.isJumping) {
  //     this.isJumping = true;
  //     this.y -= 30;

  //   }
  //   // Fallkontrolle, nachdem der Sprung beendet ist
  //   else if (!this.world.keyboard.space && this.timepassed() && this.isJumping && this.y < 80) {
  //     this.y += 10;
  //     console.log(this.y);
  //     if (this.y >= 80) {
  //       this.isJumping = false;
  //     }
  //   }
  // }
}
