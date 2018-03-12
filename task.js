const Hero = require('./hero.js');

var Task = function (difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.task = false;
}

Task.prototype.completed = function(){
  this.completed = true;
}

Task.prototype.setDifficulty = function() {
  if (this.difficultyLevel == "Easy") return 1;
  if (this.difficultyLevel == "Medium") return 2;
  if (this.difficultyLevel == "Hard") return 3;
}

module.exports = Task;
