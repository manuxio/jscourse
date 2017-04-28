class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    XY() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

const p = new Punto(5,12);
console.log(p.XY());
