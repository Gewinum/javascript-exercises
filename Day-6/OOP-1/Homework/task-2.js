function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let running = false;
    let onReady = function() {
        console.log("Coffee is ready");
    }

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.getWaterAmount = function() {
        return waterAmount;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    this.run = function() {
        running = true;
        setTimeout(function() {
            running = false;
            onReady();
        }, getTimeToBoil());
    };

    this.isRunning = function() {
        return running;
    }

    this.setOnReady = function(onReadyNew) {
        onReady = onReadyNew;
    }
}

let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
    console.log('After: ' + coffeeMachine.isRunning()); // After: false
});