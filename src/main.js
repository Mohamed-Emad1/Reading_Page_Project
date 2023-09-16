import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
/* Set up using Vue 3 */


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

// .component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(router).mount('#app')

