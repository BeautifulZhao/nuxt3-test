<template>
    <footer>
        <div class="flex">
            <div class="part">
                <div class="logo">
                    <div class="logo-ch-text">深海技术装备综合试验与检测中心</div>
                    <div class="logo-en-text">Hainan Deep-Sea Technology Innovation Center</div>
                </div>
                <div class="part-info-content">
                    <div class="item">
                        <img src="../assets/img/footer-mail.png" class="icon" alt="" />
                        电话：13627278373
                    </div>
                    <div class="item">
                        <img src="../assets/img/footer-mail.png" class="icon" alt="" />
                        官方邮箱：tyy@hn-dstic.com
                    </div>
                    <div class="item">
                        <img src="../assets/img/footer-mail.png" class="icon" alt="" />
                        地址：海南省三亚市崖州区深海科技创新公共平台10号楼507室
                    </div>
                </div>
            </div>
            <div class="menu flex">
                <div class="menu-item">
                    <div class="item-title">关于我们</div>
                    <div class="item-content flex">
                        <a href="">中心简介</a>
                        <a href="">组织架构</a>
                        <a href="">联系我们</a>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="item-title">关于我们</div>
                    <div class="item-content flex">
                        <a href="">中心简介</a>
                        <a href="">组织架构</a>
                        <a href="">联系我们</a>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="item-title">关于我们</div>
                    <div class="item-content flex">
                        <a href="">中心简介</a>
                        <a href="">组织架构</a>
                        <a href="">联系我们</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            Copyright©海南省深海技术创新中心| <a
                href="https://www.hn-dstic.com/sh/instrument/index">网站维护：海南省深海技术创新中心</a> |
            <a href="">备案证号：琼ICP备2022009094号-1</a>|
            <img src="../assets/img/gaba.jpg" title="guohui"/> 琼公网安备 46020502000034号| 技术支持：三亚崖州湾数字科信有限公司
        </div>
    </footer>
</template>


<style scoped lang="scss">
.flex {
    display: flex;
}
a {
    text-decoration: none;
    color: #ffffffb3;
    &:hover {
        color: #00c2ff;
    }
}
footer {
    color: white;
    background-color: #2c2c2c;
    padding: 1.6rem 11rem 1.4rem 11rem;
    .logo {
        margin-bottom: 20px;
    }
    .logo-ch-text{
        font-size: 28px;
        font-weight: 400;
        color: #ffffff;
        line-height: 40px;
        letter-spacing: 1.4px;
    }
    .menu {
        flex: 1;
        justify-content: space-evenly;
        .item-title {
            font-size: 14px;
            letter-spacing: 1px;
            font-weight: 600;
            margin-bottom: 20px
        }
        .item-content {
            flex-direction: column;
            a {
                line-height: 32px;
                font-size: 14px;
                letter-spacing: 1px;
                font-weight: 400;
            }
        }
    }
    .copyright {
        color: #ffffffb3;
        text-align: center;
        font-size: 13px;
    }
    .part-info {
        margin-left: 100px;
        .part-info-title {
            font-size: 14px;
            letter-spacing: 1px;
            font-weight: 600;
            margin-bottom: 20px
        }
        .part-info-content {
            flex-direction: column;
            a {
            }
        }
    }
    .part-info-content .item {
        margin-bottom: 20px;
    }

    .part-info-content .item .icon {
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }

    .part-info-content .item .icon-phone {
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }

    .part-info-content .item .icon-mail {
        width: 16px;
        height: 16px;
    }
}
</style>