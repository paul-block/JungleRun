class Level {
  enemies;
  flyingEnemies;
  flyingEnemiesWave;
  backgroundObjects;
  platforms1;
  platforms2;
  platforms3;
  collectableThrowingStars;
  coins;
  endboss;
  // clouds;
  level_end_x = 719 * 5.5;

  constructor(
    enemies,
    flyingEnemies,
    flyingEnemiesWave,
    backgroundObjects,
    platforms1,
    platforms2,
    platforms3,
    collectableThrowingStars,
    coins,
    endboss,
    // clouds
  ) {
    this.enemies = enemies;
    this.flyingEnemies = flyingEnemies;
    this.flyingEnemiesWave = flyingEnemiesWave;
    this.backgroundObjects = backgroundObjects;
    this.platforms1 = platforms1;
    this.platforms2 = platforms2;
    this.platforms3 = platforms3;
    this.collectableThrowingStars = collectableThrowingStars;
    this.coins = coins;
    this.endboss = endboss;
    // this.clouds = clouds;
  }
}
