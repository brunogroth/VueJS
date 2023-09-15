import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App)

app.mount('#app')
app.component('base-card', BaseCard)
