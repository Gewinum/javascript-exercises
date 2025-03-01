function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive.");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function() {
        return power;
    }
}

const coffee = new CoffeeMachine(100, 100);
console.log(coffee.getPower());