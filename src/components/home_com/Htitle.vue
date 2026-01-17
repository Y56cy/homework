<template>
  <div class="title">宫崎骏动漫网</div>
</template>

<script setup>
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 36px;
  color: #0d47a1; 
  padding: 30px 0;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
}

.title::after {
  content: "";
  display: block;
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, #0d47a1, #2196f3);
  margin: 10px auto 0;
  border-radius: 3px;
}

/* 响应式适配 */
@media (max-width: 480px) {
  .title {
    font-size: 28px;
  }
}
</style>