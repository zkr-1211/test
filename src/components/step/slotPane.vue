<!-- @format -->

<template>
  <span v-if="content && typeof content === 'string'">{{ content }}</span>
  <span v-if="content && typeof content === 'function'" v-html="content(row)"></span>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    content: {
      type: [String, Function],
      default: '',
    },
    row: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props){
    console.log(props.row)
  }
})
</script>
