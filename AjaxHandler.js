var AjaxHandler = new Interface('AjaxHandler', ['request', 'createXhrObject']);

var SimpleHandler = function () {
};

SimpleHandler.prototype = {
    request: function (method, url, callback, postVars) {
        var xhr = this.createXhrObject();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            (xhr.status === 200) ? callback.success(xhr.responseText, xhr.responseXML) : callback.failure(xhr.status);
        };
        console.log(JSON.stringify(xhr));
        xhr.open(method, url, true);
        if (method !== 'POST') postVars = null;
        xhr.send(postVars);
    },
    createXhrObject: function () {
        var methods = [
            function () {
                return new XMLHttpRequest();
            },
            function () {
                return new ActiveXObject('Msxml2.XMLHTTP');
            },
            function () {
                return new ActiveXObject('Microsoft.XMLHTTP');
            }
        ]
        for (var i = 0, len = methods.length; i < len; i++) {
            try {
                methods[i]();
            } catch (e) {
                continue;
            }
            this.createXhrObject = methods[i];
            return methods[i];
        }
        throw new Error('SimpleHandler: Could not create an XHR object.');
    }
}