<!--  -->
<template>
  <div class="body">
    <div class="content-card">
      <div class="content-item" v-for="(item, index) in 15">
        <div class="item-img"></div>
        <div class="item-bottom-info">
          <slot></slot>
        </div>
      </div>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>

<script>
  import { onMounted, defineComponent } from 'vue'
  export default defineComponent({
    components: {},
    name: '',
    setup() {
      onMounted(() => {})
      return {}
    }
  })
</script>
<style lang="scss" scoped>
  @import '@/assets/css/mixin';
  .content-card > i {
    width: 300px;
  }
  .content-card {
    overflow: auto;
    width: 100%;
    // display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
      @include faj();
    
    // height: 650px;
    /* 和列表一样的宽度和margin值 */
    // justify-content: flex-start;
    // grid-template-columns: repeat(auto-fill, 300px);
    // grid-gap: 32px;
    .content-item {
      @include wh(300px, 294px);
      @include borderRadius(3px);
      background: #ffffff;
      border: 1px solid #e9e9e9;
      margin-top: 20px;
      .item-img {
        height: 166px;
        background: #1890ff;
      }
      .item-bottom-info {
        // padding: 12px 24px 12px 24px;
      }
    }
  }
</style>
