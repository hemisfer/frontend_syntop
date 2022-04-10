import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//icon font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App).use(router).mount('#app')
