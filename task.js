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

Task.prototype.setUrgencyLevel = function() {
  if (this.urgencyLevel == "Low") return 1;
  if (this.urgencyLevel == "Urgent") return 2;
  if (this.urgencyLevel == "Very Urgent") return 3;
}

Task.prototype.setReward = function() {
  if (this.reward == "Green Ruppe") return 1;
  if (this.reward == "Purple Rupee") return 2;
  if (this.reward == "Heart Container") return 3;
}

Task.prototype.compareDifficultyLevel = function(task) {
  return this.setDifficulty() - task.setDifficulty();
}



module.exports = Task;
