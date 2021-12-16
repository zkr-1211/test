<!-- @format -->

<template>
  <a-affix v-bind="$props">
    <slot></slot>
  </a-affix>
</template>

<script>
import {defineComponent} from 'vue'
import {Affix} from 'ant-design-vue'

export default defineComponent({
  name: 'imc-affix',
  components: {
    'a-affix': Affix,
  },
  props: {
    ...Affix.props,
  },
})
</script>

<style src="ant-design-vue/lib/style/index.css"></style>
<style src="ant-design-vue/lib/affix/style/index.css"></style>
