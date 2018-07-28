var ListBuilder = function (parent, listLength) {
    this.parentEl = $(parent);
    this.listLength = listLength;
}

ListBuilder.prototype = {
    buildList: function (listName) {
        var list = document.createElement(listName);
        this.parentEl.appendChild(list);

        for (var i = 0; i < this.listLength; i++) {
            var item = document.createElement('li');
            list.appendChild(item);
        }
    },
    removeLists: function (listName) {
        var list = document.getElementsByTagName(listName)[0];
        this.parentEl.removeChild(list);
    }

};