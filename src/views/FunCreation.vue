<template>
  <Nav />
  <Sakura />
  <Header 
    title="二创" 
    :background-image-url="headerImage"
  />
  <main class="container">
     <SectionTitle title="精选视频" />
    <VideoList :videos="featuredVideos" layout="featured" />

    <hr class="divider-horizontal">

    <SectionTitle title="最新资讯" />
    <VideoList :videos="latestVideos" layout="latest" />
    </main>

</template>
<script setup>
import Nav from '../components/Nav.vue';
import Sakura from '../components/Sakura.vue'; 
import Header from '../components/Header.vue';
import { ref } from 'vue';

import qian1Image from '../assets/images/qian1.jpg'; 
const headerImage = ref(qian1Image);
import SectionTitle from '../components/SectionTitle.vue';
import VideoList from '../components/VideoList.vue';

const featuredVideos = ref([
  { id: 1, src: "https://player.bilibili.com/player.html?isOutside=true&aid=113714611095375&bvid=BV1KiCaYDESq&cid=27532397063&p=1&autoplay=0", content: "二十八部宫崎骏经典动漫...", time: "2025-01-12", views: "41.6万" },
  { id: 2, src: "https://player.bilibili.com/player.html?isOutside=true&aid=115507525196521&bvid=BV1vs2MBwEZC&cid=33786627073&p=1&autoplay=0", content: "【前方106秒，带你感受独一无二的宫崎骏美学！】", time: "2025-11-07", views: "5011" },
]);

// 2. 最新资讯（注意：这里的数据结构不需要 time 和 views 字段，VideoCard 会自动隐藏底部信息）
const latestVideos = ref([
  
{ id: 3, src: "https://player.bilibili.com/player.html?isOutside=true&aid=314268513&bvid=BV1bP411X7ng&cid=1149763433&p=1&autoplay=0", content: "万字拆解《天空之城》：80万人评分9.2！唯美故事下潜藏的暗黑隐喻！" },
 { id: 4, src: "https://player.bilibili.com/player.html?isOutside=true&aid=840310522&bvid=BV1k54y197fJ&cid=180563966&p=1&autoplay=0", content: "宫崎骏笔下的童真❣️" },
{ id: 5, src: "https://player.bilibili.com/player.html?isOutside=true&aid=1852724282&bvid=BV17p421y78X&cid=1495569043&p=1&autoplay=0", content: "【宫崎骏】“我们要做不放弃理想的现实主义者" },
  { id: 6, src: "https://player.bilibili.com/player.html?isOutside=true&aid=969147110&bvid=BV1Kp4y1v75k&cid=224136537&p=1&autoplay=0", content: "七岁那年我抓住了一只蝉，便以为抓住了整个夏天..." },
  { id: 7, src: "https://player.bilibili.com/player.html?isOutside=true&aid=50253127&bvid=BV15b411G76m&cid=87976175&p=1&autoplay=0", content: "宫崎骏电影中最美的场景合集！不接受反驳" },
  { id: 8, src: "https://player.bilibili.com/player.html?isOutside=true&aid=1450452767&bvid=BV1rv421C7zZ&cid=1435981115&p=1&autoplay=0", content: "吉卜力的雨天" },
  
]);

</script>



<style>


:root {
  --border-radius: 12px;
  --box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
  --secondary-color: #062d5a;
  --primary-color:rgb(161, 179, 206);
  

}

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