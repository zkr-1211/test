<template>
  <br />
  <br />
  <br />
  <a-steps :current="1">
    <template #progressDot="{ index, status, prefixCls }">
      <a-popover>
        <template #content>
          <span>step {{ index }} status: {{ status }}</span>
        </template>
        <span :class="`${prefixCls}-icon-dot`" />
      </a-popover>
    </template>
    <a-step title="Finished" description="You can hover on the dot." />
    <a-step title="In Progress" description="You can hover on the dot." />
    <a-step title="Waiting" description="You can hover on the dot." />
    <a-step title="Waiting" description="You can hover on the dot." />
  </a-steps>
  <br />
  <br />
  <br />
  <Steps :current="1" :items="items" :progressDot="false"></Steps>
  <br />
  <br />
  <br />
  <Steps :current="1" :items="items">
    <template #progressDot="{ index, status, prefixCls }"></template>
  </Steps>
  <HelloWorld />
  <HelloWorld />
  <Affix :offset-top="100">
    <a-button type="primary" @click="top += 10">Affix top</a-button>
  </Affix>
  <HelloWorld />

  <HelloWorld />
  <div id="components-affix-demo-target" ref="containerRef" class="scrollable-container">
    <div class="background">
      <Affix :target="() => containerRef">
        <a-button type="primary">Fixed at the top of container</a-button>
      </Affix>
    </div>
  </div>
  <Steps v-model:current="current" type="navigation" size="small" :style="stepStyle" @change="change">
    <StepItem title="Step 1" sub-title="00:00:05" status="finish" description="This is a description." />
    <StepItem title="Step 2" sub-title="00:01:02" status="process" description="This is a description." />
    <StepItem title="Step 3" sub-title="waiting for longlong time" status="wait" description="This is a description." />
  </Steps>
  <Affix :offset-bottom="20" @change="change">
    <a-button type="primary" @click="bottom += 10">Affix bottom</a-button>
  </Affix>
  <HelloWorld />

  <HelloWorld />
  <HelloWorld />

  <HelloWorld />
  <!-- <a-steps :current="1">
    <template #progressDot="{ index, status, prefixCls }">
      <a-popover>
        <template #content>
          <span>step {{ index }} status: {{ status }}</span>
        </template>
        <span :class="`${prefixCls}-icon-dot`" />
      </a-popover>
    </template>
    <a-step title="Finished" description="You can hover on the dot." />
    <a-step title="In Progress" description="You can hover on the dot." />
    <a-step title="Waiting" description="You can hover on the dot." />
    <a-step title="Waiting" description="You can hover on the dot." />
  </a-steps> -->

  <br />
</template>

<script lang="ts">
  import { ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import Affix from './components/affix/Affix.ce.vue'
  import Steps from './components/step/Steps.ce.vue'
  import StepItem from './components/step/StepItem.vue'
  import Breadcrumb from './components/breadcrumb/Breadcrumb.ce.vue'
  import BreadcrumbItem from './components/breadcrumb/BreadcrumbItem.ce.vue'
  import BreadcrumbSeparator from './components/breadcrumb/BreadcrumbSeparator.ce.vue'
  // import Group from './components/radio/Group.ce.vue'
  // import Radio from './components/radio/Radio.ce.vue'
  // import RadioButton from './components/radio/RadioButton.ce.vue'
  import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons-vue'
  import { Item } from 'ant-design-vue/lib/menu'
  const items = [
    {
      attrs: {
        title: 'In Progress',
        description: 'You can hover on the dot'
      },
      slot: 'description'
    },
    {
      attrs: {
        title: 'In Progress',
        description: 'You can hover on the dot'
      },
      slot: 'description1'
    },
    {
      attrs: {
        title: 'In Progress',
        description: 'You can hover on the dot'
      },
      slot: 'description2'
    },
    {
      attrs: {
        title: 'In Progress',
        description: 'You can hover on the dot'
      },
      slot: 'description3'
    }
  ]
  export default {
    components: {
      HelloWorld,
      Affix,
      Steps,
      StepItem,
      Breadcrumb,
      BreadcrumbItem,
      BreadcrumbSeparator,
      UserOutlined,
      SolutionOutlined,
      LoadingOutlined,
      SmileOutlined

      // Group,
      // Radio,
      // RadioButton
    },
    setup() {
      const containerRef = ref()
      const value = ref<string>('1')
      const change = (affixed: any) => {
        console.log('1111', affixed)
      }
      const current = ref<number>(0)
      const itemList = ref([])
      const myRef = ref(null)
      const fn = () => {
        return ` `
      }
      return {
        change,
        containerRef,
        current,
        value,
        stepStyle: {
          marginBottom: '60px',
          boxShadow: '0px -1px 0 0 #e8e8e8 inset'
        },
        items,
        fn
      }
    }
  }
</script>

<style lang="scss">
  #components-affix-demo-target.scrollable-container {
    height: 100px;
    overflow-y: scroll;
  }
  #components-affix-demo-target .background {
    padding-top: 60px;
    height: 300px;
    background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
  }
</style>
