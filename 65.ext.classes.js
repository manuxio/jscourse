class Punto2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    XY() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class Punto3D extends Punto2D {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    XYZ() {
        return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
    }
}

const p = new Punto3D(5,12,20);
console.log(p.XY());
console.log(p.XYZ());
