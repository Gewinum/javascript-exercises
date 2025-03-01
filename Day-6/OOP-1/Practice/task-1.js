function CoffeeMachine(power) {
    this.waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let self = this;
    let timeoutId = null;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Coffee is ready');
    }

    this.run = function() {
        timeoutId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function() {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = 0;
        }
    }
}

let coffee = new CoffeeMachine(50000);
coffee.waterAmount = 200;
coffee.run();
coffee.stop();