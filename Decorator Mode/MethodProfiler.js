var MethodProfiler = function (component) {
    this.component = component;
    this.timers = {};

    for (var key in this.component) {
        if (typeof this.component[key] !== 'function') {
            continue;
        }

        var that = this;
        (function (methodName) {
            that[methodName] = function () {
                that.startTimer(methodName);
                var returnValue = that.component[methodName].apply(that.component, arguments);
                that.displayTime(methodName, that.getElapsedTime(methodName));
                return returnValue;
            }
        })(key);
    }

};

MethodProfiler.prototype = {
    startTimer: function (methodName) {
        this.timers[methodName] = (new Date()).getTime();
    },
    displayTime: function (methodName, time) {
        console.log(methodName + ": " + time + " ms");
    },
    getElapsedTime: function (methodName) {
        return (new Date()).getTime() - this.timers[methodName];
    }
}
