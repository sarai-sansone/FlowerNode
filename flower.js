var Flower = /** @class */ (function () {
    function Flower(petalColor, waterAmount) {
        this.petalColor = petalColor;
        this.waterAmount = waterAmount;
    }
    Flower.prototype.getPetalColor = function () {
        return "".concat(this.petalColor, " ").concat(this.petalColor);
    };
    Flower.prototype.disp = function () {
        console.log("Color of petals is  :   " + this.petalColor);
    };
    return Flower;
}());
