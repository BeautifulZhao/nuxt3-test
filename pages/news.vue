<template>
    <div class="noticeNewPage">
        <div class="uc-section1-12 default-layout" >
            <div style="width: 100%;">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a style="color:#6c757d;" href="./index.html">首页</a></li>
                        <li class="breadcrumb-item active"  aria-current="page"><a style="color:#6c757d;" href="./noticeNewPage.html">新闻动态列表</a></li>
                    </ol>
                </nav>
            </div>
           
            <div class="uc-content" style="width: 100%;">
                <div class="box" style="background: #fff;">
                    <div class="part" style="width: 100%;">
                        <div class="title">
                            <div class="headlinebox">
                                <div class="headline">
                                    <p style="color: #000;font-size: 30px;">新闻动态</p>
                                    <img style="width: 133px;" src="~/assets/img/uc2-underline.png" alt="">
                                </div>
                            </div>
                            <div class="image-container-notice-page">
                                <div class="input-group d-flex align-items-center" style="align-self: flex-end;width: 300px;border: solid 1px #eee;border-radius:20px;overflow: hidden;">
                                    <input type="text" class="form-control user-guide-search" style="border: none;" placeholder="请输入关键字进行搜索"
                                        aria-label="Recipient's username" aria-describedby="button-addon1">
                                    <div class="input-group-append user-guide-search-btn">
                                        <svg t="1720595577871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4263" width="32" height="32"><path d="M933.602 831.47 721.175 617.262c-2.472-2.479-5.204-4.372-7.813-6.435 35.884-55.518 56.836-121.647 56.836-192.878 0-195.694-157.298-354.31-351.461-354.31-194.054 0-351.461 158.616-351.461 354.31 0 195.722 157.407 354.302 351.461 354.302 70.631 0 136.303-21.179 191.459-57.361 2.009 2.692 3.852 5.369 6.283 7.827l212.454 214.235c14.506 14.579 33.396 21.849 52.314 21.849 18.932 0 37.836-7.268 52.328-21.814C962.436 907.824 962.436 860.61 933.602 831.47M418.737 660.37c-132.562 0-240.468-108.767-240.468-242.421 0-133.634 107.907-242.428 240.468-242.428 132.561 0 240.467 108.794 240.467 242.428C659.204 551.602 551.298 660.37 418.737 660.37" fill="#63A730" p-id="4264"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-search">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="请输入"
                                    aria-label="Recipient's username" aria-describedby="button-addon1">
                                <div class="input-group-append">
                                    <a class="btn-primary btn-sm" href="/" id="button-addon2" role="button"
                                        style="padding: .25rem 1rem;line-height: 2.1;background: #414a7f5e;"><svg
                                            width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"
                                            aria-hidden="true">
                                            <path
                                                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                                                stroke="currentColor" fill="none" fill-rule="evenodd"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                        <div class="notice-new-page-guide-artice-list">
                            <a href="./detail.html" v-for="(item, index) in 6">
                                <div class="artice-list-item  border ">
                                    <div class="guide-time-box">
                                        <div class="guide-time">
                                            <div class="guide-time-day">{{23 + index}}</div>
                                            <div class="guide-time-year">2024.06</div>
                                        </div>
                                    </div>
                                    <div class="guide-card-center-box d-flex flex-column justify-content-between">
                                        <div class="guide-card-center-label">三亚深海科技城公共服务平台</div>
                                        <div class="guide-card-center-text">近日，华测检测认证集团股份有限爱你公司与昆明理工大学就《安宁产业园重点管控新污染物治理筛查与测检测测检测认证集团股份有限爱你公认证集团股份有限爱你公… </div>
                                        <div class="guide-card-center-tips  d-flex justify-content-between">
                                            <div class="tips-time">时间：2024-12-12</div>
                                            <div class="tips-author">作者：丽丽</div>
                                            <div class="tips-readingcount">阅读：293人</div>
                                        </div>
                                    </div>
                                    <div class="artice-img">
                                        <img class="artice-img-value" src="~/assets/img/hc_img2.png">
                                    </div>
                                </div>
                            </a>
                        </div>
                        <!-- 分页 -->
                        <nav aria-label="Page navigation example" class="d-flex justify-content-center" style="margin-bottom: 20px;">
                            <ul class="pagination pagination-lg">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})

</script>

<style scoped>
@import url('~/assets/styles/noticeNewPage.css');
/* 页面布局 */
.noticeNewPage {
    .page-link {
        padding: .75rem 1.5rem;
        font-size: 1.25rem;
        line-height: 1.5;
    }
}
</style>