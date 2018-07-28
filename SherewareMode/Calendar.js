var CalendarItem = new Interface('CalendarItem', ['display']);

var CalendarYear = function (year, parent) {
    this.year = year;
    this.element = document.createElement('div');
    this.element.style.display = 'none';
    parent.appendChild(this.element);

    function isLeapYear(y) {
        return (y > 0) && !(y % 4) && ((y % 100) || !(y % 400));
    }

    this.months = [];
    this.numDays = [31, isLeapYear(this.year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var i = 0, len = 12; i < len; i++) {
        this.months[i] = new CalendarMonth(i, this.numDays[i], this.element);
    }
};
CalendarYear.prototype = {
    display: function () {
        for (var i = 0, len = this.months.length; i < len; i++) {
            this.months[i].display();
        }
        this.element.style.display = 'block';
    }
};

var CalendarMonth = function (monthNum, numDays, parent) {
    this.monthNum = monthNum;
    this.element = document.createElement('div');
    this.element.style.display = 'none';
    parent.appendChild(this.element);

    this.days = [];
    for (var i = 0, len = numDays; i < len; i++) {
        this.days[i] = calendarDay; // new CalendarDay(i, this.element);
    }
};
CalendarMonth.prototype = {
    display: function () {
        for (var i = 0, len = this.days.length; i < len; i++) {
            this.days[i].display(i,this.element);
        }
        this.element.style.display = 'block';
    }
};


// var CalendarDay = function (date, parent) {
//     this.date = date;
//     this.element = document.createElement('div');
//     this.element.style.display = 'none';
//     parent.appendChild(this.element);
// };
//
// CalendarDay.prototype = {
//     display: function () {
//         this.element.style.display = 'block';
//         this.element.innerHTML = this.date;
//     }
// };

/* CalendarDay class, a flyweight leaf. */
var CalendarDay = function () {
};

CalendarDay.prototype = {
    display: function (date, parent) {
        var element = document.createElement('div');
        parent.appendChild(element);
        element.innerHTML = date +'日';
    }
};

var calendarDay = new CalendarDay();