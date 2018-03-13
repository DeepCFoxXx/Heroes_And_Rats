const Hero = require('../hero.js')
const Food = require('../food.js')
const Task = require('../task.js')
const Rat = require('../rat.js')
const assert = require('assert')

describe('hero', function(){
  var hero1;
  var hero2;
  var hero3;
  var task1;
  var task2;
  var task3;
  var food1;
  var food2;
  var rat;

  beforeEach(function() {
    hero1 = new Hero('Link', 28, 'Gourmet Meat Curry');
    hero2 = new Hero('Zelda', 50, 'Vegetable Curry');
    hero3 = new Hero('Linkle', 28, 'Seafood Rice Balls');
    task1 = new Task("Easy", "Low", "Green Ruppe");
    task2 = new Task("Medium", "Urgent", "Purple Rupee");
    task3 = new Task("Hard", "Very Urgent", "Heart Container");
    food1 = new Food('Apple', 1);
    food2 = new Food('Gourmet Meat Curry', 10)
    rat = new Rat();
    hero1.addTasks(task1);
    hero1.addTasks(task2);
    hero1.addTasks(task3);
  })

  it('can get hero name', function(){
    assert.strictEqual(hero1.name, 'Link');
  })

  it('can get hero health', function(){
    assert.strictEqual(hero1.health, 28);
  })

  it('can get hero favorite food', function(){
    assert.strictEqual(hero1.isFavouriteFood(food2), true);
  })

  it('can check for favorite food', function(){
    assert.strictEqual(hero1.isFavouriteFood(food1), false);
  })

  it('can eat safe food', function(){
    hero1.eatSafeFood(food1);
    assert.strictEqual(hero1.getHealth(), 29);
  })

  it('can eat favourite food', function(){
    hero1.eatSafeFood(food2);
    assert.strictEqual(hero1.getHealth(), 43);
  })

  it('can eat food if posioned', function(){
    rat.touchFood(food1);
    hero1.eatFood(food1);
    assert.strictEqual(hero1.getHealth(), 29);
  })

  it('hero can talk', function(){
    assert.strictEqual(hero1.talk(), 'My name is Link and my food of chioce is Gourmet Meat Curry');
  })

  it('does task have difficulty level', function(){
    assert.strictEqual(task1.difficultyLevel, "Easy");
  })

  it('does task have a urgency level', function(){
    assert.strictEqual(task1.urgencyLevel, "Low");
  })

  it('does task have task reward', function(){
    assert.strictEqual(task1.reward, "Green Ruppe");
  })

  xit('tasks starts off empty', function(){
    assert.strictEqual(hero1.tasks.length, 0)
  })

  it('can add to tasks', function(){
    hero1.addTasks(task1);
    assert.strictEqual(hero1.tasks.length, 4)
  })

  it('food has a name', function(){
    assert.strictEqual(food1.name, 'Apple');
  })

  it('food has a replenish value', function(){
    assert.strictEqual(food1.replenishValue, 1);
  })

  it('food can heal hero', function(){
    food1 = new Food('Apple', 1);
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 29);
  })

  it('can sort taks by difficulty', function(){
    assert.deepEqual(hero1.sortTasks("Difficulty"), [task1, task2, task3]);
  })

  it('can sort taks by urgency', function(){
    assert.deepEqual(hero1.sortTasks("Urgency"), [task1, task2, task3]);
  })

})
