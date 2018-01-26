const Hero = require('./hero.js');

var Task = function (difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.task = false;
}

Task.prototype.completed = function(){
  this.task = true;
}

module.exports = Task;
