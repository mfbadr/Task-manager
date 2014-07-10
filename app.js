var chalk = require('chalk');
var prompt = require('sync-prompt').prompt;

var play = [], home = [], school = [];
var input = prompt('Which list would you like to add a task to? (p)lay, (h)ome, (s)chool, or (q)uit? ');
var task;

while(input != 'q'){
  if(input === 'p'){
  task = prompt('What is the task you would like to add to the play list? ');
  play.push(task);
  }else if(input === 'h'){
  task = prompt('What is the task you would like to add to the home list? ');
  home.push(task);


  }else if(input === 's'){
  task = prompt('What is the task you would like to add to the school list? ')
  school.push(task);
  }
input = prompt('Which list would you like to add a task to? (p)lay, (h)ome, (s)chool, or (q)uit? ');
}

console.log('Your play tasks are: ' + play);
console.log('Your home tasks are: ' + home);
console.log('Your school tasks are: ' + school);

