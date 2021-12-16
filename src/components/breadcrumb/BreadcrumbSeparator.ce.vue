<!-- @format -->

<template>
  <a-breadcrumb-separator v-bind="$props">
    <slot></slot>
  </a-breadcrumb-separator>
</template>

<script>
  import { defineComponent } from 'vue'

import { BreadcrumbSeparator } from 'ant-design-vue'
export default defineComponent({
  name: 'imc-breadcrumb-separator',
  props: {
    ...BreadcrumbSeparator.props
  },
  components: {
    'a-breadcrumb-separator': BreadcrumbSeparator
  }
})
</script>

<style src="ant-design-vue/lib/breadcrumb/style/index.css"></style>
<style src="ant-design-vue/lib/style/index.css"></style>
