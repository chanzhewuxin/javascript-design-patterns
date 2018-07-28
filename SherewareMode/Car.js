// var Car = function (make, model, year, owner, tag, renewDate) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
//     this.tag = tag;
//     this.renewDate = renewDate;
// };
// Car.prototype = {
//     getMake: function () {
//         return this.make;
//     },
//     getModel: function () {
//         return this.model;
//     },
//     getYear: function () {
//         return this.year;
//     },
//     transferOwnership: function (newOwner, newTag, newRenewDate) {
//         this.owner = newOwner;
//         this.tag = newTag;
//         this.renewDate = newRenewDate;
//     },
//     renewRegistration: function (newRenewDate) {
//         this.renewDate = newRenewDate;
//     },
//     isRegistrationCurrent: function () {
//         var today = new Date();
//         return today.getTime() < Date.parse(this.renewDate);
//     }
// };

/* Car class , optimized as a flyweight. */
var Car = function (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};
Car.prototype = {
    getMake: function () {
        return this.make;
    },
    getModel: function () {
        return this.model;
    },
    getYear: function () {
        return this.year;
    },
};