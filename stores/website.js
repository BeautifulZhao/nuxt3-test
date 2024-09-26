export const useWebSiteStore = defineStote('websiteStore',{
    state: ()=> ({
        name: '',
        description: '',
    }),
    actions: {
        async fetchWebsite() {
            const { data } = await $fetch('https://api.nuxt.com/modules/pinia')
            this.name = data.name
            this.description = data.description
        },
        // async updateWebsite(name: string, description: string) {
    }
})