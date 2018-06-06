function Extend(subClass, superClass) {
    var F = function () {
    };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superClass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}
