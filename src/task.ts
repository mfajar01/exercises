export class Task {
  private name: string; //they only can be accessed by itself
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }

  completeTask() {
    this.completed = true;
  }

  show() {
    console.log(`Name is ${this.name} and completed is ${this.completed}`);
  }
}
