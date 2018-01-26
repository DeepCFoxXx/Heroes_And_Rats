const Hero = require('../hero.js')
const Food = require('../food.js')
const assert = require('assert')

describe('hero', function(){
  let hero1;
  let hero2;
  let hero3;

  beforeEach(function() {
    hero1 = new Hero('Link', 28, 'Gourmet Meat Curry');
    hero2 = new Hero('Zelda', 50, 'Vegetable Curry');
    hero3 = new Hero('Linkle', 28, 'Seafood Rice Balls');
  })

  xit('can get hero name', function(){
    assert.strictEqual(hero1.name, 'Link');
  })

  xit('can get hero health', function(){
    assert.strictEqual(hero1.health, 28);
  })

  xit('can get hero favorite food', function(){
    assert.strictEqual(hero1.favouriteFood, 'Gourmet Meat Curry');
  })

  xit('hero can talk', function(){
    assert.strictEqual(hero1.talk(), 'My name is Ragnar and my food of chioce is Thai Food');
  })

})
