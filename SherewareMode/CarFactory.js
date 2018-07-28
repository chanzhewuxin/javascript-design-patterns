var CarFactory = (function () {
    var createdCars = {};

    return {
        createCar: function (make, model, year) {
            var key = make + '-' + model + '-' + year;
            if (createdCars[key]) {
                return createdCars[key];
            } else {
                var car = new Car(make, model, year);
                createdCars[key] = car;
                return car;
            }
        }
    }
})();