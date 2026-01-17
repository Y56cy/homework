
<template>
  <div id="app">
    <!-- 路由出口：当前URL匹配的组件会显示在这里 -->
    <router-view></router-view>
  </div>
</template>
<script setup>
import Allfooter from './components/allfooter.vue';
import Nav from './components/Nav.vue';

</script>
<style>
/* 全局样式：去除默认边距 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f5f7fa;
}
</style>