class ExtraPoints extends DrawableObject {
    x;
    y;
    score = 0;
    fontSize = '64px';
    fontColor = 'orange';

    constructor() {
        super();
        this.width = 120;
        this.height = 120;
        this.x = 500;
        this.y = 380;
    }

    show() {
        document.getElementById('extraPointsContainer').classList.remove('d-none');
        document.getElementById('extraPoints').innerText = this.score;
        setTimeout(() => {
            document.getElementById('extraPointsContainer').classList.add('d-none');
            this.score = 0;
        }, 3000);
    }

    addScore(newScore) {
        this.score += newScore;
    }

    minusScore(newScore) {
        this.score -= newScore;
    }
}
