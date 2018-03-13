const Task = require('./task.js');
const Food = require('./food.js');

var Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = []
}

Hero.prototype.talk = function (){
  return (`My name is ${this.name} and my food of chioce is ${this.favouriteFood}`);
}

Hero.prototype.isFavouriteFood = function(food){
  return food.name === this.favouriteFood;
}

Hero.prototype.addTasks = function (task){
  this.tasks.push(task);
}

Hero.prototype.getHealth = function (){
  return this.health;
}

Hero.prototype.eatFood = function (food){
  this.health += food.replenishValue;
}

Hero.prototype.eatFavFood = function (favFood){
  this.health += favFood;
}

Hero.prototype.sort = function (){
  this.tasks.sort(task);
}

module.exports = Hero;
