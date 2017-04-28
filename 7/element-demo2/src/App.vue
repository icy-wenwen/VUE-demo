<template>
  <div id="app">
   <el-button @click="get()">普通按钮</el-button>
   <el-button type="primary">普通按钮</el-button>
   <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
  <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
   <el-rate v-model="val"></el-rate>
     <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      radio:"1",
      val:4
    },
    methods:{
      get(){
        alert(1)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
