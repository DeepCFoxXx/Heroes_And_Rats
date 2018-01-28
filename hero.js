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

Hero.prototype.addTasks = function (task){
  this.tasks.push(task);
}

Hero.prototype.getHealth = function (){
  return this.health;
}

Hero.prototype.eatFood = function (food){
  this.health += food;
}

Hero.prototype.eatFavFood = function (favFood){
  this.health += favFood;
}

Hero.prototype.sort = function (){
  this.tasks.sort(task);
}

Hero.prototype.sortTasksByDifficulty = function(difficultyLevel){
// some how take in difficulty level then sort the array of tasks
var task;
// sort the array of tasks by difficulty
this.tasks.forEach(function(task) {
  task.sort(task);
});
// return sorted array ?
return this.tasks;
}

Hero.prototype.viewTasks = function(){
// empty array to put completed tasks
  var completedTasks = []
// for each task in the array tasks that equals true
// put them in completed task array
  this.tasks.forEach(function(task){
    completedTasks.push(task === true);
  });
  return completedTasks;
}

Hero.prototype.sortTasksByDifficulty = function(arr, difficultyLevel){

var results = [];

arr.forEach(function(task, difficultyLevel) {
// if the task has a difficultyLevel sort into highest to lowest
  if (task.difficultyLevel)
});
// return sorted array ?
return this.tasks;
}


module.exports = Hero;
