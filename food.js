var Food = function(name, replenishValue){
  this.name = name;
  this.replenishValue = replenishValue;
  this.poisoned = false;
}

Food.prototype.poison = function(){
  this.poisoned = true;
}

module.exports = Food;
