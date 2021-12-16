/** @format */

import { defineCustomElement } from 'vue'
import Breadcrumb from './Breadcrumb.ce.vue'
import BreadcrumbItem from './BreadcrumbItem.ce.vue'
import BreadcrumbSeparator from './BreadcrumbSeparator.ce.vue'

export const gBreadcrumb = defineCustomElement(Breadcrumb)
export const gBreadcrumbItem = defineCustomElement(BreadcrumbItem)
export const gBreadcrumbSeparator = defineCustomElement(BreadcrumbSeparator)

customElements.define('imc-breadcrumb', gBreadcrumb)
customElements.define('imc-breadcrumb-item', gBreadcrumbItem)
customElements.define('imc-breadcrumb-separator', gBreadcrumbSeparator)