class ComboPupup extends DrawableObject {
    x;
    y;
    score;
    fontSize = '42px';
    fontColor = 'orange';

    // Lieber verwenden für Kombotreffer anzeigen 
    // COMBO 3x oder so statt die punktezahl

    constructor() {
        super();
        this.width = 60;
        this.height = 60;
    }

    show(x, y) {
        this.score = 'Combo';
        this.x = x;
        this.y = y;
    }
}
