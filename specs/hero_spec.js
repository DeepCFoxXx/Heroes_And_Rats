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
  let food1;
  let food2;

  beforeEach(function() {
    hero1 = new Hero('Link', 28, 'Gourmet Meat Curry');
    hero2 = new Hero('Zelda', 50, 'Vegetable Curry');
    hero3 = new Hero('Linkle', 28, 'Seafood Rice Balls');
    task1 = new Task(5, 1, 'Green Ruppe');
    task2 = new Task(10, 2, 'Purple Rupee');
    task3 = new Task(15, 3, 'Heart Container');
    food1 = new Food('Apple', 1);
    food2 = new Food('Gourmet Meat Curry', 10)
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

  xit('food has a name', function(){
    assert.strictEqual(food1.name, 'Apple');
  })

  xit('food has a replenish value', function(){
    assert.strictEqual(food1.replenishValue, 1);
  })

  xit('food can heal hero', function(){
    food1 = new Food('Apple', 1);
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 29);
  })

  xit('favorite food should heal hero by 1.5 * health', function(){
    favFood = new Food('Gourmet Meat Curry', 14);
    hero1.eatFavFood(favFood);
    assert.strictEqual(hero1.health, 42);
  })

  // xit('can sort tasks by difficulty', function(){
  //   hero1.addTasks(task1);
  //   hero1.addTasks(task2);
  //   hero1.addTasks(task3);
  //   assert.strictEqual(hero1.tasks.length, 3)
  //   hero1.sortTasksByDifficulty();
  //   // the returned sorted array of tasks will be task3 task2 task1
  // })

  xit('can view completed tasks', function(){
    hero1.addTasks(task1);
    assert.strictEqual(task1.task, false);
    task1.completed(task1);
    assert.strictEqual(task1.task, true);
    hero1.viewTasks(task);
    // the returned array will have one completed task in it
  })

  xit('can sort tasks by difficulty', function(){
    hero1.addTasks(task1);
    hero1.addTasks(task2);
    hero1.addTasks(task3);
    assert.strictEqual(hero1.tasks.length, 3)
    var arr = [task1, task2, task3];
    assert.strictEqual(hero1.sortTasksByDifficulty(arr), [task3, task2, task1]);
  })

})
