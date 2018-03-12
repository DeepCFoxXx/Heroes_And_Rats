const Task = require('../task.js')
const Hero = require('../hero.js')
const assert = require('assert')

describe('task', function(){
  let task1
  let task2
  let task3

  beforeEach(function(){
    task1 = new Task("Easy", 1, 'Green Ruppe');
    task2 = new Task("Medium", 2, 'Purple Rupee');
    task3 = new Task("Hard", 3, 'Heart Container');
  })

  it('does task have a urgency level', function(){
    assert.strictEqual(task1.urgencyLevel, 1);
  })

  it('does task have task reward', function(){
    assert.strictEqual(task1.reward, 'Green Ruppe');
  })

  it('task starts off false', function(){
    assert.strictEqual(task1.task, false);
  })

  it('task can be completed', function(){
    task1.completed(task1);
    assert.strictEqual(task1.completed, true);
  })

  it('tasks have set difficulty level', function(){
    assert.strictEqual(task1.setDifficulty(), 1);
    assert.strictEqual(task2.setDifficulty(), 2);
    assert.strictEqual(task3.setDifficulty(), 3);
  })

})
