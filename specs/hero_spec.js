const Hero = require('../hero.js')
const Food = require('../food.js')
const Task = require('../task.js')
const assert = require('assert')

describe('hero', function(){
  let hero1;
  let hero2;
  let hero3;
  let task1;
  let task2;
  let task3;

  beforeEach(function() {
    hero1 = new Hero('Link', 28, 'Gourmet Meat Curry');
    hero2 = new Hero('Zelda', 50, 'Vegetable Curry');
    hero3 = new Hero('Linkle', 28, 'Seafood Rice Balls');
    task1 = new Task(5, 1, 'Green Ruppe');
    task2 = new Task(10, 2, 'Purple Rupee');
    task3 = new Task(15, 3, 'Heart Container');
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

  xit('does task have difficulty level', function(){
    assert.strictEqual(task1.difficultyLevel, 5);
  })

  xit('does task have a urgency level', function(){
    assert.strictEqual(task1.urgencyLevel, 1);
  })

  xit('does task have task reward', function(){
    assert.strictEqual(task1.reward, 'Green Ruppe');
  })

  xit('tasks starts off empty', function(){
    assert.strictEqual(hero1.tasks.length, 0)
  })

  xit('can add to tasks', function(){
    hero1.addTasks(task1);
    assert.strictEqual(hero1.tasks.length, 1)
  })

})
