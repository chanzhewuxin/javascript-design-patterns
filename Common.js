// 链式继承方法
function clone(object) {
    function F() {
    }

    F.prototype = object;
    return new F;
}

// 类式继承
function Extend(subClass, superClass) {
    var F = function () {
    };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superClass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
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

// 绑定事件
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

// 异步请求
var asyncRequest = (function () {
    function handleReadyState(o, callback) {
        var poll = window.setInterval(function () {
            if (o && o.readyState == 4) {
                window.clearInterval(poll);
                if (callback && typeof callback == 'function')
                    callback(o);
            }
        }, 50);
    }

    var getXHR = function () {
        var http;
        try {
            http = new XMLHttpRequest;
            getXHR = function () {
                return new XMLHttpRequest;
            };
        } catch (e) {
            var msxml = [
                'MSXML2.XMLHTTP.3.0',
                'MSXML2.XMLHTTP',
                'Microsoft.XMLHTTP'
            ];
            for (var i = 0, len = msxml.length; i < len; i++) {
                try {
                    http = new ActiveXObject(msxml[i]);
                    getXHR = function () {
                        return new ActiveXObject(msxml[i]);
                    };
                    break;
                } catch (e) {
                }
            }
        }
        return http;
    };
    return function (method, uri, callback, postData) {
        var http = getXHR();
        http.open(method, uri, true);
        handleReadyState(http, callback);
        http.send(postData || null);
        return http;
    }
})();

// 链式方法调用 辅助函数
Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
    return this;
}


if (!Array.prototype.forEach) {
    Array.method('forEach', function (fn, thisObj) {
        var scope = thisObj || window;
        for (var i = 0, len = this.length; i < len; i++) {
            fn.call(scope, this[i], i, this);
        }
    });
}

if (!Array.prototype.filter) {
    Array.method('filter', function (fn, thisObj) {
        var scope = thisObj || window;
        var a = [];
        for (var i = 0, len = this.length; i < len; i++) {
            if (!fn.call(scope, this[i], i, this)) {
                continue;
            }
            a.push(this[i]);
        }
        return a;
    });
}
