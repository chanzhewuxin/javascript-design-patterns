var Animation = function (o) {
    this.onStart = new Publisher;
    this.onComplete = new Publisher;
    this.onTween = new Publisher;
};

Animation.method('fly', function () {
    this.onStart.deliver();

});