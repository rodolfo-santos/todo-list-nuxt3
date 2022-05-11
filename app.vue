<script lang="ts" setup>
const { data: todos } = useFetch("/api/todo");
const input = ref("");

async function addTodo(): Promise<void> {
  if (!input) return;
  await $fetch("/api/todo", { method: "post", body: { item: input.value } });
}

async function updateTodo(id): Promise<void> {
  await $fetch(`/api/todo/${id}`, {
    method: "put",
    body: { item: input.value },
  });
}

async function deleteTodo(id): Promise<void> {
  await $fetch(`/api/todo/${id}`, { method: "delete" });
}
</script>

<template>
  <div class="container">
    <NCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input v-model="input" placeholder="Add a new todo" />
        <NButton @click="addTodo">Add</NButton>
      </div>
      <NCard
        v-for="todo in todos"
        class="card"
        :key="todo.is"
        @click="updateTodo(todo.id)"
      >
        <h4 :class="todo.completed ? 'complete' : null">{{ todo.item }}</h4>
        <p @click="deleteTodo(todo.id)">X</p>
      </NCard>
    </NCard>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 50%;
}

.cards {
  padding: 0.5rem;
}

.input {
  outline: none;
}

.add-todo {
  display: flex;
  justify-content: space-between;
}

.card {
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.complete {
  text-decoration: line-through;
}
</style>
