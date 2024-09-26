<template>
  <!-- <NuxtWelcome /> -->
  <NuxtLoadingIndicator />
    <!-- 路由出口 -->
    <NuxtLayout>
      <NuxtPage>
      </NuxtPage>
    </NuxtLayout>
</template>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>