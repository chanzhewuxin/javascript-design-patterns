// MyNamespace.Singleton = (function () {
//
//     var uniqueInstance;
//
//     function constructor() {
//         var param = 0;
//         var param1 = 1;
//
//         return {
//             publickParam: 100,
//             publicMethod: function () {
//                 console.log('publicMethod');
//             }
//         }
//     }
//
//     return {
//         getInstance: function () {
//
//             if (!uniqueInstance)
//                 uniqueInstance = constructor();
//
//             return uniqueInstance;
//         }
//     }
//
// })();

/*
* 第六章  方法的链式调用
*
*/


(function () {

    function _$(els) {
        this.elements = [];
        for (var i = 0; i < els.length; i++) {
            var element = els[i];
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            if (arguments.length === 1) {
                return element;
            }
            this.elements.push(element);
        }
    }

    // _$.method('addEvent', function (type, fn) {
    //
    // }).method('getEvent', function () {
    //
    // }).method('addClass', function (className) {
    //
    // })
    _$.prototype = {
        each: function (fn) {
            for (var i = 0, len = this.elements.length; i < len; ++i) {
                fn.call(this, this.elements[i]);
            }
            return this;
        },
        setStyle: function (prop, val) {
            this.each(function (el) {
                el.style[prop] = val;
            });
            return this;
        },
        show: function () {
            var that = this;
            this.each(function (el) {
                that.setStyle('display', 'block');
            });
            return this;
        },
        addEvent: function (type, fn) {
            var add = function (el) {
                if (window.addEventListener) {
                    el.addEventListener(type, fn, false);
                }
                else if (window.attachEvent) {
                    el.attachEvent('on' + type, fn);
                }
            }
            this.each(function (el) {
                add(el);
            });
            return this;
        }
    }

    window.$ = function () {
        return new _$(arguments);
    }

    // window.installHelper = function (scope, interface) {
    //     scope[interface] = function () {
    //         return new _$(arguments);
    //     }
    // }

})();
