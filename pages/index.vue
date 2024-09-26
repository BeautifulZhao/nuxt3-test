<template>
    <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" navigation :pagination="{ clickable: true }"
        :slides-per-view="1" :loop="true" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }">
        <SwiperSlide v-for="slide in 2" :key="slide">
            <div class="slide" :style="{ backgroundImage: `url(${bcg})`, height: '500px' }">
                <div class="banner-title-box">
                    <div class="banner-title-h2 animate__animated animate__fadeInUp animate__delay-1s">深海技术装备综合试验与检测中心
                    </div>
                    <div class="banner-li-desc animate__animated animate__fadeInUp animate__delay-2s">
                        深海技术装备综合试验与检测中心是海南省深海技术创新中心依托三亚崖州湾科技城深海科技创新公共平台（以下简称“科创平台”）建设运行的，以促进科创平台大型科研设施共用共深海技术装备综合试验与检测中心是海南省深海技术创新中心依托三亚崖州湾科技城深海科技创新公共平台（以下简称“科创平台”）建设运行的，以促进科创平台大型科研设施共用共
                    </div>
                    <div class="more animate__animated animate__fadeInUp animate__delay-3s">
                        了解更多
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <div class="swiperpagination"></div>
    </Swiper>
    <section id="page-content">
        <div class="container">
            <div class="grid-system-demo-live-box">
                <!-- 走进中心 start-->
                <!-- <div class="col-lg-3 m-t-60 pricing-table"> -->
                <div class="" data-animate="fadeInUp" data-animate-delay="200">
                    <div class="policy-section">
                        <div class="uc-content">
                            <div class="g-title style-left">
                                <h2>走进中心</h2>
                                <div class="index-page-title-en">Entering the Center</div>
                            </div>
                            <div class="box">
                                <div class="zlfz policy-section-card ">

                                    <div class="policy-section-l">
                                        <div
                                            class="portfolio-item revert img-zoom ct-photography ct-media ct-branding ct-Media">
                                            <div class="portfolio-item-wrap">
                                                <a class="portfolio-item-link" href="./briefIntroduction.html"></a>
                                                <div class="portfolio-image policy-section-l-img">
                                                    <img src="../assets/img/index-page-center-img1.png" alt="">
                                                </div>
                                                <div class="policy-section-l-content">
                                                    <div class="policy-section-l-label">深海技术装备综合试验与检测中心</div>
                                                    <div class="policy-section-l-text">
                                                        深海技术装备综合试验与检测中心是海南省深海技术创新中心依托三亚崖州湾科
                                                        城深海科技创新公共平台以下简称“科创平台”建设运行的，以促进科创平台大型科研仪器</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="policy-section-r d-flex flex-column">
                                        <div class="policy-section-r-top d-flex">
                                            <div class="policy-section-r-top-l">
                                                <a class="portfolio-item-link" href="./fairnessIntroduction.html">
                                                    <img class="policy-section-r-top-gzxsm-img"
                                                        src="../assets/img/index-page-center-img2.png">
                                                    <div
                                                        class="policy-section-r-top-gzxsm-text d-flex flex-column align-items-center justify-content-center">
                                                        <img class="icon-zlfz" src="../assets/img/icon-gzxsm.png">
                                                        <div class="gzxsm-text-title">公正性声明</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a href="./qualityPolicyIntroduction.html">
                                                <div class="policy-section-r-top-r">
                                                    <a class="portfolio-item-link"
                                                        href="./qualityPolicyIntroduction.html">
                                                        <img class="policy-section-r-top-gzxsm-img"
                                                            src="../assets/img/index-page-center-img1.png">
                                                        <div
                                                            class="policy-section-r-top-gzxsm-text policy-section-r-top-zlfz-text  d-flex flex-column align-items-center justify-content-center">
                                                            <img class="icon-zlfz" src="../assets/img/icon-zlfz.png">
                                                            <div class="gzxsm-text-title">质量方针</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="policy-section-r-bottom w-100">
                                            <div class="policy-section-r-bottom-l">
                                                <a id="noPage3">
                                                    <div
                                                        class="policy-section-r-top-gzxsm-text policy-section-r-top-jsnl-text d-flex flex-column align-items-center justify-content-center">
                                                        <img class="icon-zlfz" src="../assets/img/icon-jsnl.png">
                                                        <div class="gzxsm-text-title jsnl-text-title">技术能力</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="policy-section-r-bottom-c">
                                                <a id="noPage4">
                                                    <img class="policy-section-r-top-gzxsm-img"
                                                        src="../assets/img/index-page-center-img1.png">
                                                    <div
                                                        class="policy-section-r-top-gzxsm-text policy-section-r-top-ryzz-text d-flex flex-column align-items-center justify-content-center">
                                                        <img class="icon-zlfz" src="../assets/img/icon-ryzz.png">
                                                        <div class="gzxsm-text-title ryzz-text-title">荣誉资质</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="policy-section-r-bottom-r">
                                                <a id="noPage5">
                                                    <div
                                                        class="policy-section-r-top-gzxsm-text policy-section-r-top-jsnl-text d-flex flex-column align-items-center justify-content-center">
                                                        <img class="icon-zlfz" src="../assets/img/icon-hzhb.png">
                                                        <div class="gzxsm-text-title jsnl-text-title">合作伙伴</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 走进中心 end-->
                <!-- 服务领域 start-->
                <div class="" data-animate="fadeInUp" data-animate-delay="200">
                    <div class="domain-services">
                        <div class="uc-content domain-services-content">
                            <div class="g-title style-left">
                                <h2>服务领域</h2>
                                <div class="index-page-title-en index-page-title-en-area">Service Area</div>
                            </div>
                            <div class="row domain-services-item-row">
                                <div class="box domain-services-item-box">
                                    <div class="domain-services-box">
                                        <div class="domain-services-box-item col-lg-12  w-100">
                                            <div class="domain-services-box-item domain-services-box-item-hygc">
                                                <a href="./domainServer.html">
                                                    <div class="text-box text-box-light">
                                                        <a href="./domainServer.html">
                                                            <div class="d-flex justify-content-center">
                                                                <img class="service-item-icon service-item-hygc-icon"
                                                                    src="../assets/img/fwly-hygc-off.png">
                                                            </div>
                                                            <div
                                                                class="domain-services-item-line domain-services-item-line-hygc">
                                                            </div>
                                                            <div class="domain-services-item-title align-items-center">
                                                                海洋工程</div>
                                                            <div class="domain-services-item-tips">
                                                                海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>

                                            <!-- <div class="domain-services-box-item domain-services-box-item-hygc">
                                                    <a href="./domainServer.html">
                                                        <img class="service-item-icon service-item-hygc-icon" src="../assets/img/fwly-hygc-off.png">
                                                        <div  class="domain-services-item-line domain-services-item-line-hygc"></div>
                                                        <div class="domain-services-item-title align-items-center">海洋工程</div>
                                                        <div class="domain-services-item-tips">
                                                            海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                        </div>
                                                    </a>
                                                </div> -->

                                            <div class="domain-services-box-item domain-services-box-item-sxznzb">
                                                <a href="./domainServer.html">
                                                    <div class="text-box text-box-light">
                                                        <a href="./domainServer.html">
                                                            <div class="d-flex justify-content-center">
                                                                <img class="service-item-icon service-item-sxznzb-icon"
                                                                    src="../assets/img/fwly-sxznzb-off.png">
                                                            </div>
                                                            <div
                                                                class="domain-services-item-line domain-services-item-line-sxznzb">
                                                            </div>
                                                            <div class="domain-services-item-title align-items-center">
                                                                水下智能装备</div>
                                                            <div class="domain-services-item-tips">
                                                                海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                            <!-- <div class="domain-services-box-item  domain-services-box-item-sxznzb">
                                                    <a href="./domainServer.html">
                                                        <img class="service-item-icon  service-item-sxznzb-icon" src="../assets/img/fwly-sxznzb-off.png">
                                                        <div  class="domain-services-item-line domain-services-item-line-sxznzb"></div>
                                                        <div class="domain-services-item-title align-items-center">水下智能装备</div>
                                                        <div class="domain-services-item-tips">
                                                            海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                        </div>
                                                    </a>
                                                </div> -->
                                            <div class="domain-services-box-item domain-services-box-item-sytrq">
                                                <a href="./domainServer.html">
                                                    <div class="text-box text-box-light">
                                                        <a href="./domainServer.html">
                                                            <div class="d-flex justify-content-center">
                                                                <img class="service-item-icon service-item-sytrq-icon"
                                                                    src="../assets/img/fwly-sytrq-off.png">
                                                            </div>
                                                            <div
                                                                class="domain-services-item-line domain-services-item-line-sytrq">
                                                            </div>
                                                            <div class="domain-services-item-title align-items-center">
                                                                石油天然气</div>
                                                            <div class="domain-services-item-tips">
                                                                海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                            <!-- <div class="domain-services-box-item domain-services-box-item-sytrq">
                                                    <a href="./domainServer.html">
                                                        <img class="service-item-icon service-item-sytrq-icon" src="../assets/img/fwly-sytrq-off.png">
                                                        <div  class="domain-services-item-line domain-services-item-line-sytrq"></div>
                                                        <div class="domain-services-item-title align-items-center">石油天然气</div>
                                                        <div class="domain-services-item-tips">
                                                            海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                        </div>
                                                    </a>
                                                </div> -->
                                        </div>
                                        <div class="domain-services-box-item col-lg-12   w-100">
                                            <div class="domain-services-box-item domain-services-box-item-xny">
                                                <a href="./domainServer.html">
                                                    <div class="text-box text-box-light">
                                                        <a href="./domainServer.html">
                                                            <div class="d-flex justify-content-center">
                                                                <img class="service-item-icon service-item-xny-icon"
                                                                    src="../assets/img/fwly-xny-off.png">
                                                            </div>
                                                            <div
                                                                class="domain-services-item-line domain-services-item-line-xny">
                                                            </div>
                                                            <div class="domain-services-item-title align-items-center">
                                                                新能源</div>
                                                            <div class="domain-services-item-tips">
                                                                海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="domain-services-box-item domain-services-box-item-hyxcl">
                                                <a href="./domainServer.html">
                                                    <div class="text-box text-box-light">
                                                        <a href="./domainServer.html">
                                                            <div class="d-flex justify-content-center">
                                                                <img class="service-item-icon service-item-hyxcl-icon"
                                                                    src="../assets/img/fwly-hyxcl-off.png">
                                                            </div>
                                                            <div
                                                                class="domain-services-item-line domain-services-item-line-hyxcl">
                                                            </div>
                                                            <div class="domain-services-item-title align-items-center">
                                                                海洋新材料</div>
                                                            <div class="domain-services-item-tips">
                                                                海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="domain-services-box-item domain-services-box-item-hykt">
                                                <a href="./domainServer.html">
                                                    <div class="text-box text-box-light">
                                                        <a href="./domainServer.html">
                                                            <div class="d-flex justify-content-center">
                                                                <img class="service-item-icon service-item-hykt-icon"
                                                                    src="../assets/img/fwly-hykt-off.png">
                                                            </div>
                                                            <div
                                                                class="domain-services-item-line domain-services-item-line-hykt">
                                                            </div>
                                                            <div class="domain-services-item-title align-items-center">
                                                                海洋勘探</div>
                                                            <div class="domain-services-item-tips">
                                                                海洋工程是指以开发、利用、保护、恢复海洋资源为目的，并且工程主体位于海岸线向海一侧的新建、改建、扩建工程。
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 服务领域 end-->
                <!-- 业务服务 start -->
                <div class="uc-business-serve-row" data-animate="fadeInUp" data-animate-delay="200">
                    <div class="uc-business-serve">
                        <div class="uc-content" style="text-align: center;">
                            <div class="headlinebox">
                                <div class="headline g-title">
                                    <h2>业务服务</h2>
                                    <div class="index-page-title-en">Business Services</div>
                                </div>
                            </div>
                            <div class="business-serve-content">
                                <div class="serve-content-container">
                                    <div class="serve-content-container-tips">
                                        团股证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就《安宁产业园重点管控新污染物治理筛查与测检测测检测认证集团股份有限爱你公认证集团股份有限爱你公团股证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就证集团股份有限爱你公司与昆明理工大学就《安宁产业园重点管控新污染物治理筛查与测检测测检测认证集团股份有限爱你公认证集团股份有限爱你公
                                    </div>
                                    <div class="serve-goods-box">
                                        <div class="tab-serve-content-item">
                                            <div class="tab-order-nav">
                                                <a class="order-tab-item-a" href="./businessServe.html">
                                                    <div class="order-tab-item order-tab-sjyy">
                                                        <div class="portfolio-9-columns">
                                                            <div
                                                                class="portfolio-item revert img-zoom ct-photography ct-media ct-branding ct-Media">
                                                                <div class="portfolio-item-wrap">
                                                                    <div class="portfolio-image">
                                                                        <img src="../assets/img/ywfw-sbzl.png" alt="">
                                                                    </div>
                                                                    <span class="order-tab-item-label">设备共享</span>
                                                                    <span
                                                                        class="order-tab-item-desc">设备租赁是一种商业模式,指租赁公司向客户提供各种设备的使用权,并由客户支付租金来临时获得设备的使用权。设备租赁通常由专业租赁公司提供,客户可以选择租赁</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a class="order-tab-item-a" href="./businessServeSeatrial.html">
                                                    <div class="order-tab-item order-tab-sjyy">
                                                        <div class="portfolio-9-columns">
                                                            <div
                                                                class="portfolio-item revert img-zoom ct-photography ct-media ct-branding ct-Media">
                                                                <div class="portfolio-item-wrap">
                                                                    <!-- <div class="portfolio-item-link">

                                                                        </div> -->
                                                                    <!-- <a class="portfolio-item-link" href="./businessServeSeatrial.html"> </a> -->
                                                                    <div class="portfolio-image">
                                                                        <img src="../assets/img/ywfw-jcfw.png" alt="">
                                                                    </div>
                                                                    <span class="order-tab-item-label">检测服务</span>
                                                                    <span
                                                                        class="order-tab-item-desc">设备租赁是一种商业模式,指租赁公司向客户提供各种设备的使用权,并由客户支付租金来临时获得设备的使用权。设备租赁通常由专业租赁公司提供,客户可以选择租赁</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a class="order-tab-item-a" href="seaTrial.html">
                                                    <div class="order-tab-item order-tab-sjyy">
                                                        <div class="portfolio-9-columns">
                                                            <div
                                                                class="portfolio-item revert img-zoom ct-photography ct-media ct-branding ct-Media">
                                                                <div class="portfolio-item-wrap">
                                                                    <div class="portfolio-image">
                                                                        <img src="../assets/img/ywfw-zbhs.png" alt="">
                                                                    </div>
                                                                    <span class="order-tab-item-label">装备海试</span>
                                                                    <span
                                                                        class="order-tab-item-desc">设备租赁是一种商业模式,指租赁公司向客户提供各种设备的使用权,并由客户支付租金来临时获得设备的使用权。设备租赁通常由专业租赁公司提供,客户可以选择租赁</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- 业务服务 end -->
                    <!-- 新闻动态 start-->
                    <div class="row news-section-row" data-animate="fadeInUp" data-animate-delay="200">

                        <div class="news-section">
                            <div class="news-section-box">
                                <div class="introduce">
                                    <div class="introduce-center-certification">
                                        <div class="headlinebox">
                                            <div class="headline g-title">
                                                <div>
                                                    <h2>新闻动态</h2>
                                                    <div class="index-page-title-en index-page-title-en-area">news
                                                        information</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="index-page-more"><a href="./noticeNewPage.html"> more ></a></div>
                                    <div class="news-item-box">
                                        <div class="row">
                                            <div class="news-item-box-portfolio portfolio-3-columns">
                                                <div class="portfolio-item outline shadow news-item news-item1">
                                                    <div class="portfolio-item-wrap">
                                                        <div class="index-page-news-item portfolio-image">
                                                            <img class="news-left-img" src="../assets/img/new-img3.png">
                                                            <div class="news-list-item">
                                                                <span class="news-list-left-title">推进高校合作
                                                                    协同培养创新人才</span>
                                                                <span class="news-left-time">2023-04-11</span>
                                                                <span class="news-left-more">查看更多></span>
                                                            </div>
                                                        </div>
                                                        <div class="portfolio-description">
                                                            <a href="detail.html">
                                                                <div class="news-list-item d-flex flex-column">
                                                                    <span class="news-list-left-title">推进高校合作
                                                                        协同培养创新人才</span>
                                                                    <span class="news-left-time">2023-04-11</span>
                                                                    <span class="news-center-text">
                                                                        近日，深海关键技术和设备检测试验公共平台完成武汉理工大学三亚科教园委托的环氧树脂隧道模型三点弯曲变形试验。本次试验是试验方法研究及功能开发的重要举措，进一步提升了平台检测技术服务能力。
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="portfolio-item outline shadow news-item news-item2">
                                                    <div class="portfolio-item-wrap">
                                                        <div class="index-page-news-item portfolio-image">
                                                            <img class="news-left-img" src="../assets/img/new-img3.png">
                                                            <div class="news-center-list-item">
                                                                <span
                                                                    class="news-center-list-item-label">深海关键技术和设备检测试验公共平台完成隧道模型三点弯曲变形试验</span>
                                                                <span class="news-center-time">2023-06-21</span>
                                                                <span class="news-center-desc">
                                                                    近日，深海关键技术和设备检测试验公共平台完成武汉理工大学三亚科教园委托的环氧树脂隧道模型三点弯曲变形试验。本次试验是试验方法研究及功能开发的重要举措，进一步提升了平台检测技术服务能力。</span>
                                                                <span class="news-center-more">查看更多 ></span>
                                                            </div>
                                                        </div>
                                                        <div class="portfolio-description">
                                                            <a href="detail.html">
                                                                <div class="news-list-item d-flex flex-column">
                                                                    <span class="news-list-left-title">推进高校合作
                                                                        协同培养创新人才</span>
                                                                    <span class="news-left-time">2023-04-11</span>
                                                                    <span class="news-center-text">
                                                                        近日，深海关键技术和设备检测试验公共平台完成武汉理工大学三亚科教园委托的环氧树脂隧道模型三点弯曲变形试验。本次试验是试验方法研究及功能开发的重要举措，进一步提升了平台检测技术服务能力。
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="portfolio-item outline shadow news-item news-item3">
                                                    <div class="news-item-right-card">
                                                        <div class="text-box">
                                                            <div class="news-item-right-label-two">强化科技服务，助力企业发展</div>
                                                            <div class="news-center-time">2023-06-04</div>
                                                            <div class="news-item-right-desc">
                                                                近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力。近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力。
                                                            </div>
                                                            <div class="news-item-right-more"> <a
                                                                    class="news-item-right-more-text"
                                                                    href="./detail.html">查看更多 ></a> </div>
                                                        </div>
                                                    </div>

                                                    <div class="news-item-right-card">
                                                        <div class="text-box">
                                                            <div class="news-item-right-label-two">强化科技服务，助力企业发展</div>
                                                            <div class="news-center-time">2023-06-04</div>
                                                            <div class="news-item-right-desc">
                                                                近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力。近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力。。
                                                            </div>
                                                            <div class="news-item-right-more"> <a
                                                                    class="news-item-right-more-text"
                                                                    href="./detail.html">查看更多 ></a> </div>
                                                        </div>
                                                    </div>

                                                    <div class="news-item-right-card">
                                                        <div class="text-box">
                                                            <div class="news-item-right-label-two">强化科技服务，助力企业发展</div>
                                                            <div class="news-center-time">2023-06-04</div>
                                                            <div class="news-item-right-desc">
                                                                近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力。近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力。近日，深海关键技术和设备检验测试公共平台技术人员联合博雅工道（北京）机器人有限公司水下机器人团队在平台水池实验室圆满完成了为期两天的“R-150轻型作业级水下机器人”功能测试。通过本次试验，进一步提升了平台检测服务能力。
                                                            </div>
                                                            <div class="news-item-right-more"> <a
                                                                    class="news-item-right-more-text"
                                                                    href="./detail.html">查看更多 ></a> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 新闻动态 end -->
                    <!-- 通知公告 start -->
                    <div class="" data-animate="fadeInUp" data-animate-delay="200">
                        <div class="notice-section">
                            <div class="uc-content">
                                <div class="box">
                                    <div class="part">
                                        <div class="title">
                                            <div class="headlinebox" style="width: 100%;">
                                                <div class="headline g-title">
                                                    <h2>通知公告</h2>
                                                    <div class="index-page-title-en">Notice Announcement</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="index-page-more index-page-more-notice"><a href="./noticePage.html">
                                                more ></a></div>
                                        <div class="notice-list-box">
                                            <ul class="list">
                                                <li>
                                                    <a href="detail.html">
                                                        <div class="notice-list-item-a">
                                                            <div class="news-left-time">
                                                                <div class="news-left-time-day">13</div>
                                                                <div class="news-left-time-year ">2024.06</div>
                                                            </div>
                                                            <div class="news-line"></div>
                                                            <div class="news-right">
                                                                <div class="news-right-title">关于水池实验室恢复检测服务的通知</div>
                                                                <div class="news-right-text">
                                                                    关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="detail.html">
                                                        <div class="notice-list-item-a">
                                                            <div class="news-left-time">
                                                                <div class="news-left-time-day">13</div>
                                                                <div class="news-left-time-year ">2024.06</div>
                                                            </div>
                                                            <div class="news-line"></div>
                                                            <div class="news-right">
                                                                <div class="news-right-title">关于水池实验室恢复检测服务的通知</div>
                                                                <div class="news-right-text">
                                                                    关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="detail.html">
                                                        <div class="notice-list-item-a">
                                                            <div class="news-left-time">
                                                                <div class="news-left-time-day">14</div>
                                                                <div class="news-left-time-year ">2024.06</div>
                                                            </div>
                                                            <div class="news-line"></div>
                                                            <div class="news-right">
                                                                <div class="news-right-title">关于水池实验室恢复检测服务的通知</div>
                                                                <div class="news-right-text">
                                                                    关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="detail.html">
                                                        <div class="notice-list-item-a">
                                                            <div class="news-left-time">
                                                                <div class="news-left-time-day">15</div>
                                                                <div class="news-left-time-year ">2024.06</div>
                                                            </div>
                                                            <div class="news-line"></div>
                                                            <div class="news-right">
                                                                <div class="news-right-title">关于水池实验室恢复检测服务的通知</div>
                                                                <div class="news-right-text">
                                                                    关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="detail.html">
                                                        <div class="notice-list-item-a">
                                                            <div class="news-left-time">
                                                                <div class="news-left-time-day">16</div>
                                                                <div class="news-left-time-year ">2024.06</div>
                                                            </div>
                                                            <div class="news-line"></div>
                                                            <div class="news-right">
                                                                <div class="news-right-title">关于水池实验室恢复检测服务的通知</div>
                                                                <div class="news-right-text">
                                                                    关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="detail.html">
                                                        <div class="notice-list-item-a">
                                                            <div class="news-left-time">
                                                                <div class="news-left-time-day">17</div>
                                                                <div class="news-left-time-year ">2024.06</div>
                                                            </div>
                                                            <div class="news-line"></div>
                                                            <div class="news-right">
                                                                <div class="news-right-title">关于水池实验室恢复检测服务的通知</div>
                                                                <div class="news-right-text">
                                                                    关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知关于水池实验室恢复检测服务的通知
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 通知公告 end -->
                    <!-- 设备仪器 start -->
                    <div class="index-page-instrument-row" data-animate="fadeInUp" data-animate-delay="200">
                        <div class="index-page-instrument">
                            <div class="uc-content">
                                <div class="g-title style-left">
                                    <div>
                                        <h2>设备仪器</h2>
                                        <div class="index-page-title-en">Equipment and instruments</div>
                                    </div>
                                </div>
                                <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" navigation
                                    :pagination="{ clickable: true }" :slides-per-view="4" :loop="true" :autoplay="{
                                        delay: 8000,
                                        disableOnInteraction: true,
                                    }">
                                    <SwiperSlide
                                        class="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                                        <div class="portfolio-item-wrap">
                                            <a href="bookDevicesSelf.html"></a>
                                            <div class="portfolio-image">
                                                <a href="bookDevicesSelf.html"><img src="../assets/img/sbyq_img1.png"
                                                        alt=""></a>
                                            </div>
                                            <div class="portfolio-description">
                                                <a href="bookDevicesSelf.html">
                                                    <h3>深海低温超高压测试系统1</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        class="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                                        <div class="portfolio-item-wrap">
                                            <a href="bookDevicesSelf.html"></a>
                                            <div class="portfolio-image">
                                                <a href="#"><img src="../assets/img/sbyq_img2.png" alt=""></a>
                                            </div>
                                            <div class="portfolio-description">
                                                <a href="bookDevicesSelf.html">
                                                    <h3>深海低温超高压测试系统2</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        class="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                                        <div class="portfolio-item-wrap">
                                            <a href="bookDevicesSelf.html"></a>
                                            <div class="portfolio-image">
                                                <a href="#"><img src="../assets/img/sbyq_img3.png" alt=""></a>
                                            </div>
                                            <div class="portfolio-description">
                                                <a href="bookDevicesSelf.html">
                                                    <h3>深海低温超高压测试系统3</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        class="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                                        <div class="portfolio-item-wrap">
                                            <a href="bookDevicesSelf.html"></a>
                                            <div class="portfolio-image">
                                                <a href="#"><img src="../assets/img/sbyq_img4.png" alt=""></a>
                                            </div>
                                            <div class="portfolio-description">
                                                <a href="bookDevicesSelf.html">
                                                    <h3>深海低温超高压测试系统4</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        class="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                                        <div class="portfolio-item-wrap">
                                            <a href="bookDevicesSelf.html"></a>
                                            <div class="portfolio-image">
                                                <a href="#"><img src="../assets/img/sbyq_img1.png" alt=""></a>
                                            </div>
                                            <div class="portfolio-description">
                                                <a href="bookDevicesSelf.html">
                                                    <h3>深海低温超高压测试系统1</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        class="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                                        <div class="portfolio-item-wrap">
                                            <a href="bookDevicesSelf.html"></a>
                                            <div class="portfolio-image">
                                                <a href="bookDevicesSelf.html"><img src="../assets/img/sbyq_img2.png"
                                                        alt=""></a>
                                            </div>
                                            <div class="portfolio-description">
                                                <a href="bookDevicesSelf.html">
                                                    <h3>深海低温超高压测试系统2</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 设备仪器 end -->
            </div>
        </div>
    </section>
</template>
<script setup>
import bcg from '../assets/img/index-page-banner-1.png';
useHead({
    title: '首页'
})
</script>

<style scoped lang="scss">
@import '~/assets/styles/indexPage.css';

.red-text {
    color: v-bind(color)
}

.slide {
    color: white;
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .banner-title-box {
        display: flex;
        flex-direction: column;
        width: 41%;
        margin: 0;
        position: absolute;
        top: 25%;
        left: 5%;
    }

    .banner-title-h2 {
        width: 100%;
        height: 40px;
        font-size: 2.25rem;
        text-align: left;
        white-space: nowrap;
    }

    .banner-li-desc {
        text-align: left;
        padding-top: 32px;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 400;
        text-align: left;
        line-height: 32px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .more {
        border: 1px solid white;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 20px;
    }
}
</style>
