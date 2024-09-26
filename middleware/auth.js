const isAuthenticated = () => {
    return false // 这里应该返回一个实际的认证状态
}
export default defineNuxtRouteMiddleware((to, from) => {
     // isAuthenticated()是一个验证用户是否已经认证的示例方法
  if (isAuthenticated() === false) {
    console.log('需要登录')
    return navigateTo('/')
  }
})
