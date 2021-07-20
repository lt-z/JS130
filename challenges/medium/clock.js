/*
Problem:
Input: numbers
Output: string

Examples:
0, 30, add 60 minutes -> 1:30
10, 30 subtract 3061 minutes -> 06:59

Data structure:
Keep structure as a number, then convert to string.

Algorithm:
Add method:
1. Convert minutes to hours and modulo 24 the hours. Add to curent hours.
2. Modulo the final hours with 24.
3. Modulo additional minutes with 60 and add to minutes.
4. Modulo the final minutes with 60.

Subtract method:
1. Convert minutes to hours and modulo 24 the hours. Subtract from current hours.
2. Modulo argument minutes with 60 to get remaining minutes to subtract.
3. If remaining minutes is > existing minutes:
  a. existing minutes += 60 - remaining minutes.
  b. reduce by one hour.
  Else: (existing minutes > remaining minutes)
  a. existing minutes - remaining minutes.
4. Modulo final minutes with 60.
5. Check if hours is negative, if so, add 24 hours.
*/

class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  toString() {
    return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`;
  }

  add(minutes) {
    this.hours += Math.floor(minutes / 60) % 24;
    this.hours %= 24;
    this.minutes += minutes % 60;
    this.minutes %= 60;

    return this.toString();
  }

  subtract(minutes) {
    this.hours -= Math.floor(minutes / 60) % 24;

    minutes %= 60;
    if (this.minutes >= minutes) {
      this.minutes -= minutes;
    } else {
      this.minutes += 60 - minutes;
      this.hours -= 1;
    }

    this.wrapTime();
    return this.toString();
  }

  wrapTime() {
    if (this.hours < 0) {
      this.hours += 24
    }
  }

  isEqual(otherClock) {
    return this.hours === otherClock.hours &&
    this.minutes === otherClock.minutes;
  }
}

module.exports = Clock;
