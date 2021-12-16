<!-- @format -->

<template>
  <RadioButton v-bind="getBindValue" v-model:checked="checked" @change="onChange" ref="el">
    <slot name="default"></slot>
  </RadioButton>
</template>

<script lang="ts">
export default {
  name: 'ImcRaidoButton',
}
</script>

<script lang="ts" setup>
import {ref, watch, unref, computed, defineEmits, defineProps, defineExpose} from 'vue'
import {RadioButton} from 'ant-design-vue'

import {ActiveMethods} from './type'

const props = defineProps({...RadioButton.props})
const emit = defineEmits(['change'])
const checked = ref<boolean>(props.checked)
const getProps = computed(() => {
  return {...props}
})

watch(
  () => props.checked,
  (newValue: boolean) => {
    checked.value = newValue
  },
)

const getBindValue = computed(() => {
  return {
    // ...attrs,
    ...unref(getProps),
    checked: checked.value,
  }
})

function onChange(e: any) {
  emit('change', e?.target?.checked)
}

const el = ref<Nullable<ActiveMethods>>(null)

function blur() {
  el.value && el.value.blur()
}

function focus() {
  el.value && el.value.focus()
}

const activeMethods: ActiveMethods = {
  blur,
  focus,
}

defineExpose({
  ...activeMethods,
})
</script>

<style src="ant-design-vue/lib/radio/style/index.css"></style>
<style src="ant-design-vue/lib/style/index.css"></style>
