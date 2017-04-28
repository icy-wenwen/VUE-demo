<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="my-btn">
      <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
     <mt-button type="danger">danger</mt-button>
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
       <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="./assets/logo.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="./assets/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="./assets/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="./assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>
<mt-radio
  title="单选框列表"
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</mt-radio>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      selected:'',
      value:''
    }
  }
}
</script>

<style>
.my-btn{
  margin-top:50px;
}
</style>
