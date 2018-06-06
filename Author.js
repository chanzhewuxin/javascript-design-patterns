function Author(name, books) {
    // Person.call(this,name);
    Author.superClass.constructor.call(this, name);
    this.books = books;
}

Extend(Author, Person);
// Author.prototype=new Person();
// Author.prototype.constructor = Author;
Author.prototype.getBooks = function () {
    return this.books;
}

Author.prototype.getName = function () {
    var name = Author.superClass.getName.call(this);
    return name + ',Author of ' + this.getBooks().join(',');
}