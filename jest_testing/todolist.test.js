/*eslint-disable*/
const Todo = require('./todo');
const TodoList = require('./todolist');

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

  // your tests go here
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("calling first returns the first todolist item", () => {
    expect(list.first()).toBe(todo1);
  });

  test("calling last returns the last todolist item", () => {
    expect(list.last()).toBe(todo3);
  });

  test('calling shift removes & returns first item from todolist', () => {
    let removed = list.shift();
    expect(removed).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('calling pop removes and returns the last item in list', () => {
    let removed = list.pop();
    expect(removed).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });  

  test('calling isDone returns true if all todos are done, returns false otherwise', () => {
    expect(list.isDone()).toBe(false); 
  }); 

  test("calling throws error when non-todo item is added", () => {
    expect(() => list.add('a')).toThrow(TypeError);
  });

  test('calling itemAt returns the item at index or error if no item at index', () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(() => list.itemAt(list.size())).toThrow(ReferenceError);
  });

  test('calling markDoneAt marks item as done or error if no item at index', () => {
    list.markDoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(true);
    expect(() => list.markDoneAt(list.size())).toThrow(ReferenceError);
  });

  test('calling markUndoneAt marks item as undone or error if no item at index', () => {
    list.markUndoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(false);
    expect(() => list.markUndoneAt(list.size())).toThrow(ReferenceError);
  });

  test('calling markAllDone marks all todos as done', () => {
    list.markAllDone();
    let todoList = list.toArray();
    todoList.forEach(todo => expect(todo.isDone()).toBe(true));
    expect(list.isDone()).toBe(true);
  });

  test("calling removeAt removes the item or error if not item at index", () => {
    list.removeAt(0);
    expect(list.toArray()).toEqual([todo2, todo3])
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list with one todo done', () => {
    list.markDone('Buy milk');
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list with all todos done', () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over elements of list when called', () => {
    let todos = [];
    list.forEach(todo => todos.push(todo));
    expect(todos).toEqual([todo1, todo2, todo3]);
  });

  test('calling filter returns a new todolist object with filtered todos', () => {
    todo1.markDone();
    let filteredList = list.filter(todo => todo.isDone());
    expect(filteredList).not.toBe(list);
    expect(filteredList.toArray()).toEqual([todo1]);
  });
});

/*eslint-enable*/
/*
  filter(callback) {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        newList.add(todo);
      }
    });
    return newList;
  }
*/

// create newList 
// copy done todo from list to newList 
// assert that newList title is same as list title (why?)
// create array doneItems that is list done todos filtered 
// assert that serialized doneItems is same as newList serialized  
