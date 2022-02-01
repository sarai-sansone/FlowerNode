class Flower {
    private petalColor:string;
    public waterAmount:number;
    
    constructor(petalColor:string, waterAmount:number) { 
        this.petalColor = petalColor;
        this.waterAmount = waterAmount;
    }

    getPetalColor(): string {
        return `${this.petalColor} ${this.petalColor}`;
    }

    disp():void { 
        console.log("Color of petals is  :   "+this.petalColor) 
    } 
}