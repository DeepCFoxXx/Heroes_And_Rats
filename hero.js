const Task = require('./task.js');

var Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = []
}

Hero.prototype.talk = function (){
  return (`My name is ${this.name} and my food of chioce is ${this.favouriteFood}`);
}

Hero.prototype.addTasks = function (task){
  this.tasks.push(task);
}

module.exports = Hero;
