import {
  Affix,
  Button,Steps,Popover,Breadcrumb
} from 'ant-design-vue'
const ant = {
  install(Vue:any) {
    Vue.use(Button)
    Vue.use(Affix)
    Vue.use(Steps)
    Vue.use(Popover)
    Vue.use(Breadcrumb)

  }
}
export default ant
