// 第一种方法，有弊端，必须知道childObject中的属性名称。

// var CompoundObject = {
//     string1: 'default value 1',
//     childObject: {
//         bool: true,
//         num: 10
//     }
// }
//
// var compoundObjectClone = clone(CompoundObject);
// // console.log(compoundObjectClone instanceof CompoundObject);
// // 错误的做法，这样会直接改变原对象的值
// // compoundObjectClone.childObject.num = 20;
//
// compoundObjectClone.childObject = {
//     num: 5,
//     bool: false
// };


// 第二种方法， 使用工厂方法

var CompoundObject = {};
CompoundObject.string1 = 'default string 1';
CompoundObject.createChildObject = function () {
    return {
        bool: true,
        num: 10
    };

}

CompoundObject.childObject = CompoundObject.createChildObject();

var compoundObjectClone = clone(CompoundObject);
compoundObjectClone.childObject = CompoundObject.createChildObject();
compoundObjectClone.childObject.num = 15;