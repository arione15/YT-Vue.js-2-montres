const Home = {
    template: '<h1>Home</h1>',
    name: 'Home'
}
const UserSettings = {
    template: '<h1>User Settings</h1>',
    name: 'UserSettings'
}
const WishList = {
    template: '<h1>Wish List</h1>',
    name: 'WishList'
}
const ShoppingCart = {
    template: '<h1>Shopping Cart</h1>',
    name: 'ShoppingCart'
}

// router
const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/user-settings', component: UserSettings, name: 'UserSettings' },
        { path: '/wish-list', component: WishList, name: 'WishList' },
        { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' }
    ]
})

const vue = new Vue({
    router
    // components: {
    //     'Home': Home,
    //     'UserSettings': UserSettings,
    //     'WishList': WishList,
    //     'ShoppingCart': ShoppingCart
    // }
}).$mount('#app');