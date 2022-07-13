<template>
  <transition name="fade">
    <Test v-if="flag" :dataArr="[1, 2, 3]" msg="arr" @send="getData"/>
  </transition>
  <transition
      leave-active-class="animate__animated animate__backOutDown"
      enter-active-class="animate__animated animate__backInDown"
  >
    <Tree v-if="!flag" :treeData="treeList"/>
  </transition>
  <button @click="changeFlag">changeFlag</button>
  <hr>
  <component :is="currentCom.comName"></component>
  <button @click="changeCon">changeCon</button>
  <hr>
  <Suspense>
    <template #default>
      <Async />
    </template>
    <template #fallback>
      <div>
        loading...
      </div>
    </template>
  </Suspense>
</template>


<script lang="ts" setup>
import Test from './components/Test.vue'
import Tree from './components/Tree.vue'
import {defineAsyncComponent, markRaw, provide, reactive, ref, Ref} from "vue";
import 'animate.css'
export type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
provide('provide', 'provideData')
const flag = ref(true)
const changeFlag = () => {
  flag.value = !flag.value
}

const treeList = reactive<TreeList[]>([
  {
    name: 'aa',
  },
  {
    name: 'bb',
    children: [
      {
        name: 'bb-1',
      }
    ]
  },
  {
    name: 'cc',
    children: [
      {
        name: 'cc-1',
        children: [
          {
            name: 'cc-1-1'
          }
        ]
      }
    ]
  }
])
const getData = (a: Ref<number>) => {
  console.log(a.value)
}

type Tabs = {
  name: string,
  comName: any
}
type Com = Pick<Tabs, 'comName'>
const tabData = reactive<Tabs[]>([
  {
    name: "Test",
    comName: markRaw(Test)
  },
  {
    name: "Tree",
    comName: markRaw(Tree)
  }
])
const currentCom = reactive<Com>({
  comName: tabData[0].comName
})
const changeCon = () => {
  currentCom.comName = currentCom.comName === tabData[0].comName ? tabData[1].comName : tabData[0].comName
}

const Async = defineAsyncComponent(() => import('./components/Async.vue'))
</script>

<style lang="scss" scoped>
.fade-enter-from {
  color: aquamarine;
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-enter-to {
  color: blue;
}

.fade-leave-from {
  color: aquamarine;
}
.fade-leave-active {
  transition: all 1.5s ease;
}
.fade-leave-to {
  color: blue;
}
</style>
