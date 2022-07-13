<template>
  <div>
    <div v-for="item in treeData" style="margin-left: 10px">
      {{ item.name }}
      <Tree :treeData="item.children"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {TreeList} from "../App.vue";
import Tree from './Tree.vue'
import {inject} from "vue";

type Props = {
  treeData?: TreeList[]
}
defineProps<Props>()

</script>
<style></style>
