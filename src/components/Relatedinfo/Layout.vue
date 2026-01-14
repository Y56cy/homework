<template>
  <div class="container1">
    <div class="main-container1">
      <slot name="main-content"></slot>
    </div>
    
    <slot name="sidebar"></slot>
  </div>
</template>

<script setup>
// 这是一个布局组件，不需要额外的 props
</script>

<style scoped>
/* 左右布局容器 (.container1) */
.container1 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 1.5rem;
  margin: 0 0 2rem 0;
  border-radius: 8px;
}

/* 左侧主内容区 (.main-container1) */
.main-container1 {
  display: grid;
  flex: 1; 
  min-width: 300px;
  background-color: rgb(225, 227, 248);
  padding: 20px;
  gap: 1.5rem;
  border-radius: 8px;
  flex-wrap: wrap;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .container1 {
    flex-direction: column; /* 平板端切换为上下布局 */
  }
  .main-container1 {
    min-width: auto;
  }
}

@media (max-width: 576px) {
  .main-container1 {
    min-width: 100%; /* 移动端占满宽度 */
  }
}
</style>