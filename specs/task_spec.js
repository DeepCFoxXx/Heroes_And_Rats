const Task = require('../task.js')
const Hero = require('../hero.js')
const assert = require('assert')

describe('task', function(){
  let task1
  let task2
  let task3

  beforeEach(function(){
    task1 = new Task("Easy", "Low", "Green Ruppe");
    task2 = new Task("Medium", "Urgent", "Purple Rupee");
    task3 = new Task("Hard", "Very Urgent", "Heart Container");
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

  it('tasks have set urgency level', function(){
    assert.strictEqual(task1.setUrgencyLevel(), 1);
    assert.strictEqual(task2.setUrgencyLevel(), 2);
    assert.strictEqual(task3.setUrgencyLevel(), 3);
  })

  it('tasks have set reward', function(){
    assert.strictEqual(task1.setReward(), 1);
    assert.strictEqual(task2.setReward(), 2);
    assert.strictEqual(task3.setReward(), 3);
  })

  it('can compare difficulty level', function(){
    assert.strictEqual(task1.compareDifficultyLevel(task2), -1);
    assert.strictEqual(task1.compareDifficultyLevel(task3), -2);
    assert.strictEqual(task1.compareDifficultyLevel(task1), 0);
  })

})
