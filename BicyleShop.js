var BicyleShop = function () {
}

BicycleShop.prototype = {
    sellBicyle: function (model) {
        // var bicycle;
        // switch (model) {
        //     case 'The Speedster':
        //         bicycle = new Speedster();
        //         break;
        //     case 'The Lowrider' :
        //         bicycle = new Lowrider();
        //         break;
        //     case 'The ComfortCruiser' :
        //     default:
        //         bicycle = new ComfortCruiser();
        //         break;
        // }
        // Interface.ensureImplements(bicycle, Bicycle);

        var bicycle = BicycleFactory.createBicycle(model);

        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    },
    createBicycle: function (model) {
        throw new Error('Unsupported operation on an abstract class.');
    }
}

var Bicycle = new Interface('bicycle', ['assemble', 'wash', 'ride', 'repair']);

var Speedster = function () {

}

Speedster.prototype = {
    assemble: function () {
    },
    wash: function () {
    },
    ride: function () {
    },
    repair: function () {
    }
}


var BicycleFactory = {
    createBicycle: function (model) {
        var bicycle;

        switch (model) {
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Comfort Cruiser':
            default:
                bicycle = new ComfortCruiser();
                break;
        }
        Interface.ensureImplements(bicycle, Bicycle);
        return bicycle;
    }
}