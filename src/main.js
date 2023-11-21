import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQrcodeReader from "vue-qrcode-reader";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/main.css"

// TODO: make this optimized
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
// import chevons icons
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


/* add icons to the library */
library.add(faQrcode, faStar, faRankingStar, faTrophy, faInfoCircle, faTimeline, faPaperPlane, faHeart, faHouse, faEllipsis, faChevronLeft, faChevronRight)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(VueQrcodeReader)
    .mount('#app')
