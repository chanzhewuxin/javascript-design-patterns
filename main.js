/*

interface Composite (){
    function add(child);
    function remove(child);
    function getChild(index);
}

interface FormItem(){
    function save();
}

*/

var ResultSet = new Interface('ResultSet', ['getDate', 'getResults']);

var ResultFormatter = function (resultsObject) {
    // if (!(resultsObject instanceof TestResult)) {
    //     throw  new Error('ResultFormatter: constructor requires an instance of TestResult as an argument.');
    // }
    // this.resultsObject = resultsObject;
    Interface.ensureImplements(resultsObject, ResultSet);
    this.resultsObject = resultsObject;
}

ResultFormatter.prototype.renderResults = function () {

    var dateOfTest = this.resultsObject.getDate();
    var resultsArray = this.resultsObject.getResults();

    var resultContainer = document.createElement('div');
    var resultHeader = document.createElement('h3');
    resultHeader.innerHTML = '' + dateOfTest.toUTCString();
    resultContainer.appendChild(resultHeader);

    var resultsList = document.createElement('ul');
    resultContainer.appendChild(resultsList);
    for (var i = 0; i < resultsArray.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML = resultsArray[i];
        resultsList.appendChild(listItem);
    }
    return resultContainer;
}