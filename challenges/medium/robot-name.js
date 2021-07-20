/*
Problem:
Input: None
Output: string

Examples:
None

Data structure:
Keep structure as a string.

Algorithm:
1. Generate name method:
  a. Create empty var to store name.
  b. Create a for-loop to a length of 5:
    From 0-1 -> Generate random alpha characters and add to name var.
    From 2-4 -> Generate random numbers and add to name var.
  c. Return name.
2. Name method:
  a. If name has already been generated, return the same name.
  b. Create new robot name from generate name method.
  c. Check if robot name already used, if so, re-generate.
  d. Add robot name to static name array of all robots generated.
  e. Return the new robot name
3. Reset method:
  a. Find current index of robot name.
  b. Create new name from generate name method.
  c. Replace new name at current index.
*/

Math.seedrandom = require('seedrandom');

class Robot {
  constructor() {
    this.roboName = this.name();
  }

  static deployed_robots = [];
  static ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  name() {
    if (this.roboName) return this.roboName;

    let robotName = this._generateName();
    if (this._alreadyDeployed(robotName)) {
      return this.name();
    }

    this._addRobot(robotName);
    return robotName;
  }

  reset() {
    let index = Robot.deployed_robots.indexOf(this.roboName);
    this.roboName = this._generateName();
    Robot.deployed_robots[index] = this.robotName;
  }

  _generateName() {
    let robotName = '';
    for (let idx = 0; idx <= 4; idx += 1) {  
      if (idx < 2) {
        robotName += Robot.ALPHA[Math.floor(Math.random() * Robot.ALPHA.length)];
      } else {
        robotName += Math.floor(Math.random() * 9);
      }
    }
    return robotName;
  }

  _addRobot(robot) {
    Robot.deployed_robots.push(robot);
  }

  _alreadyDeployed(robot) {
    return Robot.deployed_robots.includes(robot);
  }
}

module.exports = Robot;
