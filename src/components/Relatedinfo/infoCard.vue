<template>
  <div class="grid-item">
    <a :href="url" target="_blank" class="card-link">
      <img :src="imageUrl" :alt="title">
      
      <div class="content">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <div class="read-more">
            查看详情 →
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true }
});
</script>

<style scoped>
/* 使用原始 HTML 中的 .grid-item 样式 */

.grid-item {
  background-color: white; 
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease; 
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1); 
}

.card-link {
    text-decoration: none;
    display: block;
    color: inherit; /* 继承颜色 */
}

.grid-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 3px solid #aacdf7; 
}

.grid-item .content {
  padding: 10px ;
  
}

.grid-item .content h4 {
  margin-bottom: 8px;
  color: #2c3e50;
}

.grid-item .content p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.read-more {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.grid-item:hover .read-more {
  text-decoration: underline;
}

</style>