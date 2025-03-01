function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
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
        setTimeout(function() {
            onReady();
        }, getTimeToBoil());
    };

    this.setOnReady = function(onReadyNew) {
        onReady = onReadyNew;
    }
}

let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
    let amount = coffeeMachine.getWaterAmount();

    console.log( 'Coffee is ready: ' + amount + 'ml' ); // Coffee is ready: 150 ml
});

coffeeMachine.run();