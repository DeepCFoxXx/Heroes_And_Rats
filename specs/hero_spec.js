const Hero = require('../hero.js')
const assert = require('assert')

describe('hero', function(){
  let hero1;
  let hero2;
  let hero3;

  beforeEach(function() {
    hero1 = new Hero('Ragnar', 100, 'Thai Food');
    hero2 = new Hero('Lagertha', 150, 'Indian Food');
    hero3 = new Hero('Floki', 200, 'Pizza');
  })

  xit('can get hero name', function(){
    assert.strictEqual(hero1.name, 'Ragnar');
  })

  xit('can get hero health', function(){
    assert.strictEqual(hero1.health, 100);
  })

  xit('can get hero favorite food', function(){
    assert.strictEqual(hero1.favouriteFood, 'Thai Food');
  })

  it('hero can talk', function(){
    assert.strictEqual(hero1.talk(), 'My name is Ragnar and my food of chioce is Thai Food');
  })

})
