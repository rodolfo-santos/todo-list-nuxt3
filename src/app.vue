<script lang="ts" setup>
const { todos, addTodo, updateTodo, deleteTodo } = useTodos();
const input = ref("");

function handleClick(): void {
  addTodo(input.value);
  input.value = "";
}
</script>

<template>
  <div class="container">
    <NCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input v-model="input" placeholder="Add a new todo" />
        <NButton @click="handleClick">Add</NButton>
      </div>
      <NCard v-for="todo in todos" class="card" :key="todo.is">
        <h4
          :class="todo.completed ? 'complete' : null"
          @click="updateTodo(todo.id)"
        >
          {{ todo.item }}
        </h4>
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
