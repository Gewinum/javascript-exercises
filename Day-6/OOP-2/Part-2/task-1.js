function CoffeeMachine(power) {
    this.power = power;
}
CoffeeMachine.prototype = {
    waterAmount: 0,
    WATER_HEAT_CAPACITY: 4200,
    getTimeToBoil() {
        return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
    },
    run() {
        setTimeout(() => {
            console.log("Coffee is ready!")
        }, this.getTimeToBoil())
    },
    setWaterAmount(amount) {
        this.waterAmount = amount;
    }
};

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();