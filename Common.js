// 链式继承方法
function clone(object) {
    function F() {
    }

    F.prototype = object;
    return new F;
}

// 掺元类 方法
function augment(receivingClass, givingClass) {
    if (arguments[2]) {
        for (var i = 2; i < arguments.length; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } else {
        for (var methodName  in givingClass.prototype) {
            if (!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

var addEvent = (function () {
    if (document.addEventListener) {
        return function (el, type, fn) {
            if (el.length) {
                for (var i = 0; i < el.length; i++) {
                    addEvent(el[i], type, fn);
                }
            } else {
                el.addEventListener(type, fn, false);
            }
        };
    } else {
        return function (el, type, fn) {
            if (el.length) {
                for (var i = 0; i < el.length; i++) {
                    addEvent(el[i], type, fn);
                }
            } else {
                el.attachEvent('on' + type, function () {
                        return fn.call(el, window.event);
                    }
                )
                ;
            }
        };
    }
})();