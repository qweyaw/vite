<template>
  <div>
    <h2 @click="a ++"><span>{{ a }}</span></h2>
    <h2 @click="b ++">{{ b }}</h2>
    <h2>{{ sum }}</h2>
    <p>{{ msg }} --- {{ dataArr }}</p>
    <hr>
    <h2>{{ provideData }}</h2>
    <button @click="send">send</button>
  </div>
</template>


<script lang="ts" setup>
import {computed, inject, ref} from "vue";
let provideData = inject('provide')
type Prop = {
  msg?: string;
  dataArr?: number[]
}
withDefaults(defineProps<Prop>(), {
  msg: 'default',
  dataArr: () => []
})


let a = ref(2)
const b = ref(4)

const emit = defineEmits(['send'])
const send = () => {
  emit('send', a)
}
const sum = computed(() => {
  return a.value + b.value
})
</script>

<style lang="scss" scoped>
h2 {
  p {
    color: aqua;
  }
}
</style>
