class Score extends DrawableObject {

    score = 0;
    fontSize = '42px';
    fontColor = 'orange';

    constructor() {
        super();
        this.x = 910;
        this.y = 60;
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
