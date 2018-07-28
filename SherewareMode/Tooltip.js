var Tooltip = function (targetElement, text) {
    this.target = targetElement;
    this.text = text;
    this.delayTimeout = null;
    this.delay = 1000;

    this.element = document.createElement('div');
    this.element.style.display = 'none';
    this.element.style.position = 'absolute';
    this.element.className = 'tooltip';
    document.getElementsByTagName('body')[0].appendChild(this.element);
    this.element.innerHTML = this.text;

    var that = this;
    addEvent(this.target, 'mouseover', function (e) {
        console.log('mouseover');
        that.startDelay(e);
    });
    addEvent(this.target, 'mouseout', function (e) {
        that.hide();
    });
};

Tooltip.prototype = {
    startDelay: function (e) {
        if (this.delayTimeout === null) {
            var that = this;
            var x = e.clientX;
            var y = e.clientY;
            this.delayTimeout = setTimeout(function () {
                that.show(x, y);
            }, this.delay);
        }
    },
    show: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = (y + 20) + 'px';
        this.element.style.display = 'block';
        clearTimeout(this.delayTimeout);
        this.delayTimeout = null;
    },
    hide: function () {
        this.element.style.display = 'none';
        clearTimeout(this.delayTimeout);
        this.delayTimeout = null;
    }

}