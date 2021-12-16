<!-- @format -->

<template>
  <RadioGroup v-bind="getBindValue" v-model:value="value" @change="onChange" ref="el">
    <template v-for="item in itemList" :key="item.slotName">
      <Radio v-bind="item.attr" v-if="item.type === 'default'">
        <slot :name="item.slotName">{{ item.attr.label }}</slot>
      </Radio>
      <RadioButton v-else v-bind="item.attr">
        <slot :name="item.slotName">{{ item.attr.label }}</slot>
      </RadioButton>
    </template>
  </RadioGroup>
</template>

<script lang="ts">
export default {
  name: 'ImcRaidoGroup',
}
</script>

<script lang="ts" setup>
import {ref, watch, unref, computed, defineEmits, defineProps, defineExpose, PropType} from 'vue'
import {RadioGroup, Radio, RadioButton} from 'ant-design-vue'

import {ActiveMethods, RadioItem} from './type'

const props = defineProps({
  ...RadioGroup.props,
  itemList: {
    type: Array as PropType<RadioItem[]>,
    default: [],
  },
})
const emit = defineEmits(['change'])
const value = ref<any>(props.value)
const getProps = computed(() => {
  return {...props}
})

watch(
  () => props.value,
  (newValue: boolean) => {
    value.value = newValue
  },
)

const getBindValue = computed(() => {
  return {
    // ...attrs,
    ...unref(getProps),
    value: value.value,
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
