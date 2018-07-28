function Publisher() {

    this.subscribers = [];
}

Publisher.prototype = {
    deliver: function (data) {
        this.subscribers.forEach(function (fn) {
            fn(data);
        });
        return this;
    },
    subscribe: function (publisher) {
        var that = this;
        var alreadyExists = publisher.subscribers.some(
            function (el) {
                return el === that;
            }
        );
        if (!alreadyExists) {
            publisher.subscribers.push(this);
        }
        return this;
    },
    unsubscribe: function (publisher) {
        var that = this;
        publisher.subscribers = publisher.subscribers.filter(function (el) {
            return el !== that;
        });
        return this;
    }
};

var publisherObject = new Publisher();

var observerObject = function (data) {
    console.log(data);

    arguments.callee.unsubscribe(publisherObject);
};

observerObject.subscribe(publisherObject);
