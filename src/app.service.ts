import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class AppService {
  getHello(): string {
    this.exerciseOne();
    this.exerciseTwo();
    return 'The excercise execution can be seen in console';
  }

  exerciseOne() {
    console.log('Excersise 1');
    const tasks: Array<Task> = [];
    for (let i = 0; i < 5; i++) {
      const task = new Task(`tarea ${i}`);
      tasks.push(task);
    }
    console.log('Tasks before change status\n');
    tasks.map((task: Task) => task.show());
    tasks.map((task: Task) => task.completeTask());
    console.log('\nTasks after change status \n');
    tasks.map((task: Task) => task.show());
  }

  async exerciseTwo() {
    console.log('Exercise two');
    console.log('first request');
    const requestOk: RequestInfo = new Request(
      'https://jsonplaceholder.typicode.com/users/1', // good request
      { method: 'GET' },
    );
    const requestKo: RequestInfo = new Request(
      'http://hdwaedae.es', //request with fail
      { method: 'GET' },
    );
    const response = await fetch(requestOk);
    const responseBody = await response.json();
    console.log(responseBody);

    console.log('Second request');
    try {
      const responseKo = await fetch(requestKo);
    } catch (e) {
      console.log('the response failed with the following error\n', e);
      return;
    }
  }
}
