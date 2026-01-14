<template>
    <Nav />
  <Sakura />
  <Header 
    title="相关资讯" 
    :background-image-url="headerImage"
  />
    
    <main class="container">
      
      <SectionTitle title="最新资讯" />

      <InfoPageLayout>
        <template #main-content>
          <InfoCard
            v-for="(item, index) in latestArticles"
            :key="index"
            :image-url="item.imageUrl"
            :title="item.title"
            :description="item.description"
            :url="item.url"
          />
        </template>
        
        <template #sidebar>
          <HotListSidebar :hot-items="hotItems" />
        </template>
      </InfoPageLayout>
      
      <SectionTitle title="精选视频" />
      
      <div class="container2">
        <InfoCard
          v-for="(item, index) in videoItems"
          :key="index"
          :image-url="item.imageUrl"
          :title="item.title"
          :description="item.description"
          :url="item.url"
        />
      </div>
      
    </main>
    
    <AppFooter />
  
</template>

<script setup>
import Nav from '../components/Nav.vue';
import Sakura from '../components/Sakura.vue'; 
import Header from '../components/Header.vue';
import { ref } from 'vue';

import qian1Image from '../assets/images/qian1.jpg'; 
const headerImage = ref(qian1Image);
import SectionTitle from '../components/SectionTitle.vue';

import InfoPageLayout from '../components/Relatedinfo/Layout.vue';
import HotListSidebar from '../components/Relatedinfo/HotList.vue';
import InfoCard from '../components/Relatedinfo/infoCard.vue';

// --- 数据定义 ---

// 1. 最新资讯数据 (对应 .main-container1 中的两个 .grid-item)
const latestArticles = ref([
  { imageUrl: 'src/assets/images/castle_sky2.jpg', title: '天空之城创作背景解析', description: '简要介绍天空之城的创作灵感、时代背景等。', url: 'https://zhuanlan.zhihu.com/p/633489395' },
  { imageUrl: 'src/assets/images/haer2.jpg', title: '哈尔的移动城堡创作背景解析', description: '简要介绍哈尔的移动城堡的创作灵感、时代背景等。', url: 'https://example.com/sky-castle' },
]);

// 2. 热点信息数据 (对应 .hot-list)
const hotItems = ref([
  { title: '宫崎骏新作最新消息', url: '#' },
  { title: '吉卜力美术馆参观指南', url: '#' },
  { title: '经典动画重映时间表', url: '#' },
  { title: '动画配乐背后的故事', url: '#' },
  { title: '角色设计灵感来源', url: '#' },
]);

// 3. 精选视频数据 (对应 .container2 中的八个 .grid-item)
const videoItems = ref([
  { imageUrl: 'src/assets/images/red_pig3.jpg', title: '宫崎骏经典《红猪》赏析', description: '人到中年，才看懂宫崎骏心中的最美爱情，原来是这样……', url: 'https://www.163.com/dy/article/IRVBIE840552FU22.html' },
  { imageUrl: 'src/assets/images/totoro1.jpg', title: '电影《龙猫》制作故事 第六章 幕后秘辛', description: '难忘回忆系列：宫崎骏与他的仲夏夜之梦', url: 'https://zhuanlan.zhihu.com/p/82927012' },
  { imageUrl: 'src/assets/images/boniu2.jpg', title: '《崖上的波妞》：为爱而勇敢的样子，真的很美', description: '没有了人鱼公主中的悲情，也并没有多么磅礴宏大的故事，《崖上的波妞》是宫崎骏一次返璞归真的回归', url: 'https://zhuanlan.zhihu.com/p/342847433' },
  { imageUrl: 'src/assets/images/qian4.jpg', title: '《千与千寻》无脸男是谁！ ', description: '宫崎骏访谈解释：你身边到处都是这种人', url: 'https://www.msn.cn/zh-cn/entertainment/%E5%90%8D%E4%BA%BA/%E5%8D%83%E4%B8%8E%E5%8D%83%E5%AF%BB-%E6%97%A0%E8%84%B8%E7%94%B7%E6%98%AF%E8%B0%81-%E5%AE%AB%E5%B4%8E%E9%AA%8F%E8%AE%BF%E8%B0%88%E8%A7%A3%E9%87%8A-%E4%BD%A0%E8%BA%AB%E8%BE%B9%E5%88%B0%E5%A4%84%E9%83%BD%E6%98%AF%E8%BF%99%E7%A7%8D%E4%BA%BA/ar-AA1Tx5Jz' },
  { imageUrl: 'src/assets/images/qifefng3.jpg', title: '影评 | 《起风了》：有梦想的人一直在拼尽全力', description: '动荡年代下梦想与现实的交织', url: 'https://www.zhihu.com/tardis/bd/art/626224524' },
  { imageUrl: 'src/assets/images/castle_sky2.jpg', title: '《天空之城》的背景故事', description: '摘自豆瓣，这篇影评可能有剧透。', url: 'https://movie.douban.com/review/9685152/' },
  { imageUrl: 'src/assets/images/monv.jpg', title: '《魔女宅急便》：用孩子的修行讲述成人世界的生存之道', description: '无论是工作还是为人，魔女身上闪闪发光的善良，永不妥协的精神，尽职尽责的品质，都是在这个世界上立足所不可或缺的。', url: 'https://baike.baidu.com/tashuo/browse/content?id=222bebc5d91f5924b0bd5e36' },
  { imageUrl: 'src/assets/images/haer1.jpg', title: '看懂这些隐喻，才能真正看懂《哈尔的移动城堡》', description: '多年以后，宫崎骏在接受采访时曾经表示，自己最满意的一部作品是《哈尔的移动城堡》。', url: 'https://movie.douban.com/review/15912566/' },
]);
</script>

<style scoped>
/* 仅保留页面特定的布局样式和容器样式 */

.container {
  background-color: aliceblue;
  padding: 1rem;
  margin: 3rem auto;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.divider-horizontal {
  border: none;
  height: 3px;
  background: linear-gradient(to right, #007bff, #28a745, #ffc107);
  margin: 0 auto 3rem;
  max-width: 1200px;
}

/* container2 视频网格样式 */
.container2 {
  display: grid; 
  background-color: #f9f9f9;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  gap: 25px; 
  padding: 10px 0;
}

</style>