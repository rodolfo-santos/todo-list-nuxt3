<script lang="ts" setup>
const { data } = useFetch("/api/todo");
</script>

<template>
  <div>
    {{ data }}
    <NuxtWelcome />
  </div>
</template>
