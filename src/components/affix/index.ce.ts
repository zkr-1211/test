/** @format */

import {defineCustomElement} from 'vue'
import Affix from './Affix.ce.vue'

export const gAffix = defineCustomElement(Affix)

customElements.define('imc-affix', gAffix)
