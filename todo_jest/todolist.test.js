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

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('todolist converts to array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first item in todolist', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('last item in todolist', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shift item in todolist', () => {
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop last item in todolist', () => {
    let popped = list.pop();
    expect(popped).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('all todos are done', () => {
    expect(list.isDone()).toBe(false);
  });

  test('get the item at an index', () => {
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(3).toThrow());
  });

  test('mark a todo as done at an index', () => {
    list.markDoneAt(1);
    expect(todo2.isDone()).toEqual(true);
    expect(() => list.markDoneAt(3)).toThrow();
  });

  test('mark a todo as undone at an index', () => {
    list.markUndoneAt(1)
    expect(todo2.isDone()).toEqual(false);
    expect(() => list.markUndoneAt(3)).toThrow();
  });

  test('mark all todos as done', () => {
    list.markAllDone()
    expect(todo1.done).toBe(true);
    expect(todo2.done).toBe(true);
    expect(todo3.done).toBe(true);
  });

  test('remove a todo at an index', () => {
    list.removeAt(0);
    expect(list.todos).not.toContain(todo1);
    expect(() => list.removeAt(5)).toThrow();
  });

  test('toString returns string rep of the list - none done', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('toString returns string rep of the list - first done', () => {
    todo1.done = true;
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('toString returns string rep of the list - all done', () => {
    todo1.done = true;
    todo2.done = true;
    todo3.done = true;

    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('forEach to iterate each through each todo', () => {
    list.forEach((item) => item.done = true);
    expect(todo1.done).toBe(true);
    expect(todo2.done).toBe(true);
    expect(todo3.done).toBe(true);
  });

  test('filter to return a new filtered array', () => {
    let filtered = list.filter((item) => !item.done);
    expect(filtered).toEqual(list);

    todo1.done = true;
    let filtered2 = list.filter((item) => !item.done);
    expect(filtered2.todos).not.toContain(todo1);
    expect(filtered2.todos).toContain(todo2);
    expect(filtered2.todos).toContain(todo3);

    let testList = new TodoList(list.title);
    testList.add(todo1);
    let filtered3 = list.filter((item) => item.done);
    expect(filtered3).toEqual(testList);
  });

  test('mark all undone for each todo', () => {
    todo1.done = true;
    todo2.done = true;
    todo3.done = true;

    list.markAllUndone();
    expect(todo1.done).toBe(false);
    expect(todo2.done).toBe(false);
    expect(todo3.done).toBe(false);
  });

  test('mark a todo as done', () => {
    list.markDone('Buy milk');
    expect(todo1.done).toBe(true);
  });
});