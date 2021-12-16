<!-- @format -->

<template>
  <a-steps v-bind="$attrs">
    <template #progressDot="row">
      <!-- 案例1 -->
      <slot name="progressDot" />
      <!-- 案例2 -->
      <!-- <span v-if="stepsTemplate && typeof stepsTemplate === 'function'" v-html="stepsTemplate()"></span> -->
      <!-- 案例3 -->
      <!-- <template #progressDot="{ index, status, prefixCls }">
        <a-popover>
          <template #content>
            <span>step {{ row.index }} status: {{ row.status }}</span>
          </template>
          <span :class="`${row.prefixCls}-icon-dot`" />
        </a-popover>
      </template> -->
    </template>

    <a-step v-for="step in items" v-bind="step.attrs"></a-step>
  </a-steps>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Steps, Step } from 'ant-design-vue'
  import slotPane from './slotPane.vue'

  export default defineComponent({
    name: 'imc-steps',
    components: {
      'a-steps': Steps,
      'a-step': Step,
      slotPane
    },
    props: {
      stepsTemplate: {
        type: Function,
        default: () => `<a-popover>
        <template #content>
          <span>step {{ row.index }} status: {{ row.status }}</span>
        </template>
       <span :class="${row.prefixCls}-icon-dot" />
      </a-popover>`
      },
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },

    setup() {
      console.log()
    }
  })
</script>
<style src="ant-design-vue/lib/steps/style/index.css"></style>
