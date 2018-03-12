const assert = require('assert')
const Food = require('../food.js')
const Rat = require('../rat.js')

describe('Rat tests', function(){
  var rat;
  var food;

  beforeEach(function() {
    rat = new Rat();
    food = new Food("Cod", 8);
  })

  it('can touch food', function(){
    rat.touchFood(food);
    assert.strictEqual(food.poisoned, true);
  })

})
