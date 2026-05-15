class circleArea{
    constructor (radius){
        this.radius = radius;
        console.log(this.radius);
    }

    set radius (newRadius){
        if(typeof newRadius === "number" &&  newRadius > 0){
            this._radius = newRadius;
        }
        else{
            console.error("Radius must be positive.");
        }
    }

    get radius (){
        return this._radius;
    }

    Area() {
        return `The Area is ${this.radius * 3.1415 * this.radius}`;
    }
}

const c1 = new circleArea(7);
console.log(c1.Area());