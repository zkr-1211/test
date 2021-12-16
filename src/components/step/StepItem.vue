<!-- @format -->

<template>
  <Step v-bind="$props">
    <template #default>
      <slot></slot>
    </template>

    <template #description>
      <slot name="description"></slot>
    </template>

    <template #title>
      <slot name="title"></slot>
    </template>

    <template #icon>
      <slot name="icon"></slot>
    </template>

    <template #subTitle>
      <slot name="subTitle"></slot>
    </template>
  </Step>
</template>

<script>
  import { defineComponent } from 'vue'
  import { Step } from 'ant-design-vue'
  export default defineComponent({
    name: 'imc-step',
    components: {
      Step
    },
    props: {
      ...Step.props
    },

    setup() {
      
    }
  })
</script>

<style src="ant-design-vue/lib/steps/style/index.css"></style>