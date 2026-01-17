<template>
    <nav class="navbar">
        <ul class="nav-menu">
            <li><router-link to="/" style="margin: 0 15px; font-size: 18px;">首页</router-link></li>
            <li><router-link to="/Author" style="margin: 0 15px; font-size: 18px;">作者</router-link></li>
          <li><router-link to="/works" style="margin: 0 15px; font-size: 18px;">作品一览</router-link></li>
            <li><router-link to="/FunCreation" style="margin: 0 15px; font-size: 18px;">二创视频</router-link></li>
            <li><router-link to="/PicturesPage" style="margin: 0 15px; font-size: 18px;">精美图片</router-link></li>
            <li><router-link to="/RelatedinfoPage" style="margin: 0 15px; font-size: 18px;">相关资讯</router-link></li>
        </ul>
    </nav>
</template>
<style scoped>
.navbar {
            position: sticky; /* 粘性定位，滚动时固定在顶部 */
            top: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.7); /* 半透明白色 */
            backdrop-filter: blur(10px); /* 毛玻璃模糊效果 */
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* 淡淡的阴影 */
            z-index: 1000; /* 保证在最上层 */
            padding: 0 20px;
        }

        .nav-menu {
            display: flex;
            justify-content: center; /* 居中排列 */
            list-style: none;
            padding: 15px 0;
            flex-wrap: wrap; /* 移动端自动换行 */
        }

        .nav-menu li {
            margin: 0 20px;
        }

        .nav-menu a {
            text-decoration: none;
            color: #0d47a1; /* 深蓝色 */
            font-size: 1.1rem;
            font-weight: bold;
            position: relative;
            padding-bottom: 5px;
            transition: color 0.3s;
        }

        /* 导航栏下划线动画效果 */
        .nav-menu a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #2196f3; /* 亮蓝色 */
            transition: width 0.3s;
        }

        .nav-menu a:hover {
            color: #2196f3;
        }

        .nav-menu a:hover::after {
            width: 100%;
        }
</style>