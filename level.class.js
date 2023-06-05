class Level {
  enemies;
  flyingEnemies;
  backgroundObjects;
  platforms1;
  platforms2;
  collectableThrowingStars;
  coins;
  endboss;
  level_end_x = 719 * 5.5;

  constructor(
    enemies,
    flyingEnemies,
    backgroundObjects,
    platforms1,
    platforms2,
    collectableThrowingStars,
    coins,
    endboss
  ) {
    this.enemies = enemies;
    this.flyingEnemies = flyingEnemies;
    this.backgroundObjects = backgroundObjects;
    this.platforms1 = platforms1;
    this.platforms2 = platforms2;
    this.collectableThrowingStars = collectableThrowingStars;
    this.coins = coins;
    this.endboss = endboss;
  }
}
