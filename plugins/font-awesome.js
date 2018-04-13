import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'

import faAndroid from '@fortawesome/fontawesome-free-brands/faAndroid'
import faApple from '@fortawesome/fontawesome-free-brands/faApple'
import faWindows from '@fortawesome/fontawesome-free-brands/faWindows'

import faTelegramPlane from '@fortawesome/fontawesome-free-brands/faTelegramPlane'
import faVk from '@fortawesome/fontawesome-free-brands/faVk'
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp'

import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faPinterest from '@fortawesome/fontawesome-free-brands/faPinterest'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG'

import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar'
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft'
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarker'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

import faCommentAlt from '@fortawesome/fontawesome-free-regular/faCommentAlt'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

fontawesome.library.add(
  faAndroid,
  faApple,
  faWindows,
  faTelegramPlane,
  faVk,
  faWhatsapp,
  faFacebookF,
  faPinterest,
  faTwitter,
  faLinkedinIn,
  faGooglePlusG,
  faComment,
  faCalendar,
  faPaperPlane,
  faEye,
  faBars,
  faTimes,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faPhone,
  faMapMarker,
  faEnvelope,
  faCommentAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
