const Task = require('../task.js')
const Hero = require('../hero.js')
const assert = require('assert')

describe('task', function(){
  let task1
  let task2
  let task3

  beforeEach(function(){
    task1 = new Task(5, 1, 'Green Ruppe');
    task2 = new Task(10, 2, 'Purple Rupee');
    task3 = new Task(15, 3, 'Heart Container');
  })

  xit('does task have difficulty level', function(){
    assert.strictEqual(task1.difficultyLevel, 5);
  })

  xit('does task have a urgency level', function(){
    assert.strictEqual(task1.urgencyLevel, 1);
  })

  xit('does task have task reward', function(){
    assert.strictEqual(task1.taskReward, 'Green Ruppe');
  })

})
