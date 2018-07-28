var SimpleProfiler = function (component) {
    this.component = component;
};

SimpleProfiler.prototype = {
    buildList: function () {
        var startTime = new Date();
        this.component.buildList();
        var elapsedTime = (new Date()).getTime() - startTime.getTime();
        console.log('buildList:' + elapsedTime + ' ms');
    }
};

