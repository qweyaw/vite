import { createApp } from 'vue'
import App from './App.vue'
import Test from './components/Test.vue'
createApp(App).component('Test', Test).mount('#app')
