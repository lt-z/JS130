"use strict";

/*
Problem:
Input: year, month
Output: date string

Examples:
2013, 9, 'Saturday', 'first' -> 2013 Sept 7
2015, 4, 'Thursday', 'fourth' -> 2015 Apr 23

Data structure:
Convert to the date object and store as an array. Return as a string.

Algorithm:
Find month day of the week method:
  1. Create an empty array to store dates that are the day of the week.
  2. Loop from the first day to the last day of the month:
    a. Create a new date and check if the day is on that day of the week.
      1. if it is, add to the array.
  3. Return array.

Day method:
  1. Invoke the above method and store as a new var.
  2. Use switch case to choose the correct descriptor and return the date.
*/

class Meetup {
  static daysOfWeek = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  };

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  day(dayOfWeek, descriptor) {
    let array = this._findMonthDoW(dayOfWeek);

    switch (descriptor.toLowerCase()) {
      case 'first': return array[0];
      case 'second': return array[1];
      case 'third': return array[2];
      case 'fourth': return array[3];
      case 'fifth': return array[4] || null;
      case 'last': return array.slice(-1);
      default: return array.filter(date => date.getDate() > 12 && date.getDate() < 20)[0];
    }
  }

  _findMonthDoW(dayOfWeek) {
    let arr = [];
    let daysInMonth = new Date(this.year, this.month + 1, 0);
    for (let day = 1; day <= daysInMonth.getDate(); day += 1) {
    let currentDate = new Date(this.year, this.month, day);
      if (currentDate.getDay() === Meetup.daysOfWeek[dayOfWeek.toLowerCase()]) {
        day += 6;
        arr.push(currentDate);
      }
    }
    return arr;
  }
}

module.exports = Meetup;

