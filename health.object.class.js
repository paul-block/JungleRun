class Diamonds extends DrawableObject {

    score = 0;
    fontSize = '42px';
    fontColor = 'lightblue';

    constructor() {
        super();
        this.x = 90;
        this.y = 130;
        this.width = 60;
        this.height = 60;
    }

    addScore(newScore) {
        this.score += newScore;
    }

    minusScore(newScore) {
        this.score -= newScore;
    }
}
