<template>
  <aside class="sidebar">
    <h3>热点信息</h3>
    <ul class="hot-list">
      <li v-for="(item, index) in hotItems" :key="index">
        <a :href="item.url || '#'" :title="item.title">{{ item.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  hotItems: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
/* 侧边栏样式 (.sidebar) */
.sidebar {
  flex: 0 0 300px; /* 固定宽度，与原始 CSS 保持一致 */
  background-color: rgb(194, 206, 248);
  border-right: 3px solid #416ece;
  padding: 10px;
  border-radius: 8px;
}

/* 标题和列表容器 */
aside h3 {
  padding-left: 18px;
  font-size: 20px;
}
ul {
  list-style: none;
  list-style-position: inside;
  padding-left: 0px;
  padding-right: 20px;
}
.hot-list {
  list-style: none;

}

/* 列表项 (.hot-list li) */
.hot-list li {
  list-style-type: none;
  margin-bottom: 15px; 
  background: url('src/assets/images/flower.png')no-repeat left ;
  background-size: 18px 18px;  
  padding-left: 20px;
  
} 

/* 链接样式 */
.hot-list a {
  font-size: 18px;
  color: #1e1d1d;
  text-decoration: none;
  display: block;
  padding: 4px 0;
  transition: all 0.3s;
  padding-bottom: 10px;
  border-bottom: 2px dashed #1c1a1a;
}

.hot-list a:hover {
  color: #3c83e7;
  transform: translateX(3px);
}

.hot-list a:focus {
  color: rgb(9, 31, 114);
  text-decoration: underline;
  outline: none;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .sidebar {
    border-right: none;
  border-right: 3px solid #416ece;
    border-top: 3px solid #416ece ;
    padding-top: 20px;
    margin-top: 20px;
    flex: auto; /* 允许在小屏下自适应 */
    width: 100%;
  }
}
</style>