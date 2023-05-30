class Level {
  enemies;
  flyingEnemies;
  backgroundObjects;
  platforms;
  collectableThrowingStars;
  coins;
  level_end_x = 719 * 5.5;

  constructor(
    enemies,
    flyingEnemies,
    backgroundObjects,
    platforms,
    collectableThrowingStars,
    coins,
  ) {
    this.enemies = enemies;
    this.flyingEnemies = flyingEnemies;
    this.backgroundObjects = backgroundObjects;
    this.platforms = platforms;
    this.collectableThrowingStars = collectableThrowingStars;
    this.coins = coins;
  }
}
