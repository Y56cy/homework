// 1. 导入Vue Router的核心方法和你的组件
import { createRouter, createWebHashHistory } from 'vue-router'
// 导入你写的组件（路径根据自己的文件位置调整）
import Author from '../Author.vue'      // 首页组件
import FunCreation from '../FunCreation.vue'     // 关于宫崎骏组件
import Homepage from '../Homepage.vue'     // 二创视频组件
import PicturesPage from '../PicturesPage.vue'
import RelatedinfoPage from '../RelatedinfoPage.vue'
import works from '../works.vue'
// 2. 定义路由规则：URL路径 ↔ 对应组件
const routes = [
  {
    path: '/Author',          // 访问根路径（http://localhost:5173/）
    name: 'Author',       // 路由名称（可选，方便后续跳转）
    component: Author    // 显示的组件
  },
  {
    path: '/FunCreation',     // 访问/about路径
    name: 'FunCreation',
    component: FunCreation
  },
  {
    path: '/',     // 访问/video路径
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/PicturesPage',     // 访问/video路径
    name: 'PicturesPage',
    component: PicturesPage
  },
    {
        path: '/RelatedinfoPage',     // 访问/video路径
        name: 'RelatedinfoPage',
        component: RelatedinfoPage
    },
    {
        path: '/works',     // 访问/video路径
        name: 'works',
        component: works
    }
]

// 3. 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),  // 采用HTML5的history模式（URL没有#）
  routes                        // 关联上面定义的路由规则
})

// 4. 导出路由实例，供main.js使用
export default router