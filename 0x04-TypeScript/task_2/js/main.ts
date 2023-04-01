interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home'
  };
  getCoffeeBreak() {
    return 'Getting a coffee break'
  };
  workDirectorTasks() {
    return 'Getting to director tasks'
  };
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home'
  };
  getCoffeeBreak() {
    return 'Cannot have a break'
  };
  workTeacherTasks() {
    return 'Getting to work'
  };
}

function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

function isDirector(employee: (Director | Teacher)): boolean {
  return employee instanceof Director;
}

function executeWork(employee: (Director | Teacher)) {
  if (isDirector(employee)) return (employee as Director).workDirectorTasks()
  return (employee as Teacher).workTeacherTasks()
}

function teachClass(todayClass: ('Math' | 'History')) {
  return `Teaching ${todayClass}`
}
