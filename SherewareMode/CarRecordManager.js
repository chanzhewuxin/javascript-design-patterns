var CarRecordManager = (function () {

    var carRecordDatabase = {};

    return {
        addCarRecord: function (make, model, year, owner, tag, renewDate) {
            var car = CarFactory.createCar(make, model, year);
            carRecordDatabase[tag] = {
                owner: owner,
                renewDate: renewDate,
                car: car
            };
        },
        transferOwnership: function (tag, newOwner, newTag, newRenewDate) {
            var record = carRecordDatabase[tag];
            record.owner = newOwner;
            record.tag = newTag;
            record.renewDate = newRenewDate;
        },
        renewRegistration: function (tag, newRenewDate) {
            carRecordDatabase[tag].renewDate = newRenewDate;
        },
        isRegistrationCurrent: function (tag) {
            var today = new Date();
            return today.getTime() < Date.parse(carRecordDatabase[tag].renewDate);
        }
    };
})();