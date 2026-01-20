<template>
  <div>
    <Nav />
  <Sakura /> 
    
    <Header 
      title="精美图片" 
      :background-image-url="headerImage"
    />

    <main class="container">
      
      <ImageTextSection
        title="吉卜力经典原画集"
        image-url="src/assets/images/monv1.jpg"
        :content-a="contentA"
        :content-b="contentB"
        button-text="查看完整原画集"
        button-url="https://www.bilibili.com/opus/551347558842623346"
      />
    
      <ScrollGallery :images="scrollImages" /> 
      
      <hr class="divider-horizontal">
      
      <SectionTitle title="精彩瞬间" />
      
      <ImageGrid :images="gridImages" /> 
      
    </main>
    
      <Allfooter />
  </div>
</template>

<script setup>
import './assets/css/variables.css';
import Nav from './components/Nav.vue';
import Sakura from './components/Sakura.vue'; 
import Header from './components/Header.vue';
import { ref } from 'vue';

import Image from './assets/images/totoro1.jpg'; 
const headerImage = ref(Image);
import SectionTitle from './components/SectionTitle.vue';
import Allfooter from './components/allfooter.vue';
// 新增组件
import ImageTextSection from './components/PictureRelated/ImageTextSection.vue';
import ScrollGallery from './components/PictureRelated/ScrollGallery.vue';
import ImageGrid from './components/PictureRelated/ImageGrid.vue';

// --- ImageTextSection 数据 ---
const contentA = ref("吉卜力工作室自1985年成立以来，创作了无数经典的动画作品，其原画手稿更是艺术的瑰宝。本图集收录了《龙猫》《千与千寻》《天空之城》等经典作品的原版原画，每一张都承载着宫崎骏先生对动画的热爱与执着。");
const contentB = ref("这些原画不仅展现了吉卜力独有的手绘风格，更能让你感受到动画创作背后的细腻与用心，是动画爱好者不可错过的收藏佳品。");
const getImageUrl = (name) => {
  return new URL(`./assets/images/${name}`, import.meta.url).href;
};
// --- ScrollGallery 数据 ---
const scrollImages = ref([
  { url: getImageUrl('boniu2.jpg'), alt: '图片1' },
  { url: getImageUrl('red_pig3.jpg'), alt: '图片2' },
  { url: getImageUrl('qian1.jpg'), alt: '图片3' },
  { url: getImageUrl('qifefng3.jpg'), alt: '图片4' },
  { url: getImageUrl('monv.jpg'), alt: '图片5' },
]);

// --- ImageGrid 数据 ---


const gridImages = ref([
 { url: getImageUrl('monv.jpg'), alt: '魔女' },
  { url: getImageUrl('ghost_princess1.jpg'), alt: '幽灵公主1' },
  { url: getImageUrl('ghost_pricess2.jpg'), alt: '幽灵公主2' }, 
  { url: getImageUrl('alikaidi.jpg'), alt: '阿里卡迪' },
  { url: getImageUrl('monv1.jpg'), alt: '魔女宅急便' },
  { url: getImageUrl('haer1.jpg'), alt: '哈尔的移动城堡' },
  { url: getImageUrl('red_pig1.jpg'), alt: '红猪' },
  { url: getImageUrl('monv3.jpg'), alt: '魔女宅急便3' },
]);
</script>

<style scoped>

.container {

  background-color: aliceblue;
  padding: 1rem;
  max-width: 1200px;
  border-radius: var(--border-radius);
  margin: 0 auto 3rem;

}


.divider-horizontal {

    border: none;
    height: 3px;
    background:linear-gradient(to right,#007bff,#28a745,#ffc107);
    margin: 0 auto 3rem;
    max-width: 1200px;

}

</style>