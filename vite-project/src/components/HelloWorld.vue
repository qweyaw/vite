<script setup lang="ts">
import { ref } from 'vue'
import { add } from "../utils/add";

defineProps<{ msg: string }>()

const count1 = ref(3)
const count2 = ref(0)
const sum = add(count1.value, count2.value)
</script>

<template>
  <h2>{{ sum }}</h2>
  <h2>{{ count1 }}</h2>
  <button type="button" @click="count1 ++">count1 ++</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
