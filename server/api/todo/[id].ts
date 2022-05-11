import { db } from "../db";

export default defineEventHandler((e) => {
  const method = e.req.method;
  const context = e.context;
  const { id } = context.params;

  if (method === "PUT") {
    const { todo, index } = findTodoById(id);

    const updateTodo = {
      ...todo,
      completed: !todo.completed,
    };

    db.todos[index] = updateTodo;
    return updateTodo;
  }

  if (method === "DELETE") {
    const { todo, index } = findTodoById(id);
    db.todos.splice(index, 1);

    return { message: "item deleted" };
  }
});

function findTodoById(todoId) {
  let index = null;

  const todo = db.todos.find((todo, i) => {
    console.log(todo.id, todoId);
    if (todo.id === todoId) {
      index = i;
      return true;
    }
    return false;
  });
  if (!todo) throw new Error();

  return { todo, index };
}
