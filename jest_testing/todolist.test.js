const Todo = require('./todo');
const TodoList = require('./todolist');

/*eslint-disable*/
describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray returns an array containing todos', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns first todo item', () => {
    expect(list.first()).toBe(todo1);
  });

  test('calling last returns last todo item', () => {
    expect(list.last()).toBe(todo3);
  });

  test('calling shift removes and returns first todo item', () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('calling pop removes and returns last todo item', () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2])
  });

  test('calling isDone returns false when all todos not done', () => {
    expect(list.isDone()).toBe(false);
  });

  test('calling isDone returns true when all todos are done', () => {
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test('calling add throws error when passed a non todo item', () => {
    expect(() => list.add('a')).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
  });

  test('calling itemAt throws error if no element at index', () => {
    let tooLongLength = list.toArray().length + 1;
    expect(() => list.itemAt(tooLongLength)).toThrow(ReferenceError);
  });

  test('calling itemAt returns todo item if passed valid index', () => {
    expect(list.itemAt(0)).toBe(todo1);
  });

  test('calling markDoneAt marks todoItem as done if index is valid', () => {
    list.markDoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(true);
    expect(list.itemAt(1).isDone()).toBe(false);
    expect(list.itemAt(2).isDone()).toBe(false);
  });  

  test('calling markDoneAt throws error if no element at index', () => {
    let tooLongLength = list.toArray().length + 1;
    expect(() => list.markDoneAt(tooLongLength)).toThrow(ReferenceError);
  });  

  test('calling markUndoneAt marks todoItem  at index undone', () => {
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
    list.markUndoneAt(0);

    expect(list.itemAt(0).isDone()).toBe(false);
    expect(list.itemAt(1).isDone()).toBe(true);
    expect(list.itemAt(2).isDone()).toBe(true);
  });  

  test('calling markUndoneAt throws error if no element at index', () => {
    let tooLongLength = list.toArray().length + 1;
    expect(() => list.markDoneAt(tooLongLength)).toThrow(ReferenceError);
  });  

  test('calling markAllDone marks every todo done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test('calling removeAt removes the todo at index', () => {
    list.removeAt(0);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('calling removeAt throws error if no element at index', () => {
    let tooLongLength = list.toArray().length + 1;
    expect(() => list.removeAt(tooLongLength)).toThrow(ReferenceError);
  });  

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list when a todo is done', () => {
    list.markDoneAt(0);
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of list when all todos done', () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });
  
  test('calling forEach iterates over every element in list', () => {
    let copyList = [];
    list.forEach(todo => copyList.push(todo));
    expect(list.toArray()).toEqual(copyList);
  });

  test('filter returns a new todolist object whose list is filtered', () => {
    todo1.markDone();
    let filteredToDoList = list.filter(todo => todo.isDone() === true);
    expect(filteredToDoList).not.toEqual(list);
    expect(filteredToDoList.toArray()).toEqual([todo1]);
    expect(filteredToDoList.itemAt(0)).toBe(list.toArray()[0])
  });

});

/*
  
*/