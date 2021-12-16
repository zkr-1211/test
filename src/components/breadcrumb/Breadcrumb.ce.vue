<!-- @format -->

<template>
  <Breadcrumb v-bind="$props">
    <template #default>
      <slot></slot>
    </template>
     <template #separator>
      <slot name="separator"></slot>
    </template>
  </Breadcrumb>
</template>
<script>
  import { defineComponent } from 'vue'
  import { Breadcrumb } from 'ant-design-vue'
  export default defineComponent({
    components: {
      Breadcrumb
    },
    props: {
      ...Breadcrumb.props
    }
  })
</script>

<style src="ant-design-vue/lib/breadcrumb/style/index.css"></style>
<style src="ant-design-vue/lib/style/index.css"></style>
