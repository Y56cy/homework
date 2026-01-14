<template>
  <header :style="headerStyle">
    <div class="hcontainer">
      <h2>{{ title }}</h2>
      </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

// 1. 定义组件接收的属性 (Props)
const props = defineProps({
  // 页面主标题
  title: {
    type: String,
    required: true,
    default: '页面标题',
  },
  // 背景图片 URL (注意：如果您将图片放在 /src/assets/，可能需要用 import 导入)
  backgroundImageUrl: {
    type: String,
    required: false,
    default: '../asserts/images/boniu2.jpg', // 提供一个默认值
  },
});

// 2. 使用计算属性 (computed) 来生成 <header> 的 style
// 这样可以动态地将背景图 URL 和渐变应用到组件上。
const headerStyle = computed(() => {
  // 注意：CSS 中的 url() 需要引用变量
  return {
    // 复制您原有的 background 样式
    background: `
      linear-gradient(90deg, rgba(1, 21, 39, 0.7) 0%, rgba(218, 230, 245, 0.4) 50%, rgba(0,0,0,0) 100%),
      url(${props.backgroundImageUrl})
    `,
    // 复制您原有的 background 属性
    'background-position': 'center',
    'background-size': 'cover',
  };
});
</script>

<style scoped>
/* 3. 复制并优化您的 CSS 样式 */

header {
  /* background 属性已通过 :style 动态绑定，这里只保留其他属性 */
  color: white;
  padding: 6rem 1rem;
  margin-bottom: 2rem;
}

.hcontainer {
  text-align: left;
  max-width: 1200px; 
  /* 大屏居中，小屏左对齐 */
  margin: 0 auto; /* 先让整个 header 容器居中 */
  margin-left: 2rem; /* 确保标题文字有左边距 */
  box-sizing: border-box; /* 确保 padding 不会超出 max-width */
}

h2 {
  font-size: 2.5rem;
  margin: 0;
  /* 确保 h2 不会超出容器 */
  max-width: 600px; 
}

/* 4. 复制响应式设计 */
@media (max-width: 768px) {
  .hcontainer {
    padding-left: 1rem; /* 小屏减少左间距 */
  }

  h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.8rem;
  }
}
</style>