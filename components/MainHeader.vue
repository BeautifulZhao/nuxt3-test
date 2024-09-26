<template>
    <div class="header">
        <!-- Topbar -->
        <div id="topbar">
            <div class="headerContainer">
                <div class="index-page-top-logo">
                    <div class="index-page-top-logo-leftcontent">
                        <ul class="top-menu">
                            <li>
                                <a href="#"><img class="top-header-img" src="../assets/img/logotm.png"></a>
                            </li>
                            <li>
                                <a href="./index.html" class="header-center-logo">
                                    <img class="top-header-img" style="width: 300px;height: auto;object-fit: contain;"
                                        src="../assets/img/jczx_logo.png">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <div class="social-icons social-icons-colored-hover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end: Topbar -->
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#1a1a1a"
                text-color="#fff" active-text-color="#ffd04b" router>
                <template v-for="item in menus">
                    <template v-if="item.children">
                        <el-sub-menu :index="item.name">
                            <template #title>{{item.name}}</template>
                            <el-menu-item v-for="smenu in item.children" :key="smenu.name"  :index="smenu.path">
                                 {{ smenu.name }}
                            </el-menu-item>
                        </el-sub-menu>
                    </template>
                    <el-menu-item v-else :index="item.path">{{ item.name }}</el-menu-item>
                </template>
            </el-menu>
    </div>
</template>

<script setup>
const activeIndex = ref('首页')
const menus = ref([
    { name: '首页', path: '/' },
    { name: '中心概况', children: [
        { name: '中心简介', path: '/introduction-intro' },
        { name: '公正性说明', path: '/introduction-explain' },
        { name: '质量方针和目标', path: '/introduction-goal' }
    ]},
    { name: '新闻资讯', children: [
        { name: '新闻动态', path: '/news' },
        { name: '通知公告', path: '/announcement' }
    ]},
    {
        name:'检测服务', path: '/detection'
    },
    {
        name:'设备共享', children: [
        { name: '上机预约', path: '/appointment' },
        { name: '设备租赁', path: '/rental' }
    ]
    },
    {
        name:'装备海试', path: '/seatrial'
    },
    {
        name:'资源中心', path: '/resources'
    },
    {
        name:'联系我们', path: '/contact'
    },
])
</script>
<style scoped lang="scss">
#topbar>.headerContainer {
    padding-left: 0;
    padding-right: 0;
    height: 7.56rem;
    background: url('../assets/img/header-top-bg.png') no-repeat center;
    background-size: 100% 100%;
}
ul.el-menu.el-menu-demo {
    justify-content: center;
    & > .el-menu-item,
    :deep .el-sub-menu__title {
        padding: 10px 12px;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 600;
    }
}

.index-page-top-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.56rem;
    box-sizing: border-box;
}

.index-page-top-logo-leftcontent {
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    align-items: center;
    height: 100%;
}

.index-page-top-logo{
    max-width: calc(100% - 26rem);
    margin: auto;
}

.top-header-img {
    width: 300px;
    height: auto;
    object-fit: contain;
}

#topbar .top-menu {
    height: 100%;
    display: flex;
    align-items: center;
    list-style-type: none;

    li {
        margin-right: 16px;
    }
}

@media (max-width: 1200px) {

    #header .header-logo-img-content .container,
    #header .headerConfigList .container {
        padding-left: 0 !important;
        padding-right: 0 !important;
        ;
    }

    .index-page-top-logo,
    .menuNav {
        max-width: calc(100% - 20rem);
        margin: auto;
    }
}
</style>