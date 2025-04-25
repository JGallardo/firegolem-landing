import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Disable Vue Devtools (especially helpful if Cursor is being noisy)
app.config.devtools = false

app.mount('#app')
