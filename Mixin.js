var Mixin = function () {
};
Mixin.prototype = {
    serialize: function () {
        var output = [];
        for (key in this) {
            output.push(key + ':' + this[key]);
        }
        return output.join(',');
    }
}

