const useTodos = () => {
  const { data: todos, refresh } = useAsyncData("todo", async () => {
    return $fetch("/api/todo");
  });

  async function addTodo(item): Promise<void> {
    if (!item) return;
    await $fetch("/api/todo", { method: "post", body: { item } });
    refresh();
  }

  async function updateTodo(id): Promise<void> {
    await $fetch(`/api/todo/${id}`, { method: "put" });
    refresh();
  }

  async function deleteTodo(id): Promise<void> {
    await $fetch(`/api/todo/${id}`, { method: "delete" });
    refresh();
  }

  return { todos, addTodo, updateTodo, deleteTodo };
};

export { useTodos };
