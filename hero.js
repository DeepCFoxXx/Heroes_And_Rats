var Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype.talk = function (){
  return (`My name is ${this.name} and my food of chioce is ${this.favouriteFood}`);
}

module.exports = Hero;
