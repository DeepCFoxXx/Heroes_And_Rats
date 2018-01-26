const Food = require('../food.js')
const Hero = require('../hero.js')
const assert = require('assert')


describe('food', function(){
  let food1
  let food2
  let food3

  beforeEach(function(){
    food1 = new Food('Apple', 1);
    food2 = new Food('Meat', 2);
    food3 = new Food('Monster Cake', 5);
  })

xit('food has a name', function(){
  assert.strictEqual(food1.name, 'Apple');
})

xit('food has a replenish value', function(){
  assert.strictEqual(food1.replenishValue, 1);
})

})
