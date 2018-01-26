var Task = function (difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.Reward = reward;
  this.task = false;
}

Task.prototype.completed = function(){
  this.task = true;
}

module.exports = Task;
