<template>
  <h1>Async</h1>
  <div v-for="item in dataList">
    {{item.msg}}
  </div>
</template>

<script setup lang="ts">
import {axios} from "../utils/axios";
const dataList = await axios('./data.json')
console.log(dataList)
</script>

<style scoped>

</style>
