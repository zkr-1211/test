<!-- @format -->

<template>
  <BreadcrumbItem v-bind="$props">
    <template #default>
      <slot></slot>
    </template>
  </BreadcrumbItem>
</template>
<script>
  import { defineComponent } from 'vue'

  import { BreadcrumbItem } from 'ant-design-vue'
  export default defineComponent({
    components: {
      BreadcrumbItem
    },
    props: {
      ...BreadcrumbItem.props
    }
  })
</script>

<style src="ant-design-vue/lib/breadcrumb/style/index.css"></style>
<style src="ant-design-vue/lib/style/index.css"></style>
