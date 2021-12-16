/** @format */

import {defineCustomElement} from 'vue'
import Steps from './Steps.ce.vue'
import StepItem from './StepItem.ce.vue'

export const gSteps = defineCustomElement(Steps)
export const gStepItem = defineCustomElement(StepItem)

customElements.define('imc-steps', gSteps)
customElements.define('imc-step-item', gStepItem)
