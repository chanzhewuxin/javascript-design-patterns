function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

// var Person = {
//     name: 'default name',
//     getName: function () {
//         return this.name;
//     }
// }