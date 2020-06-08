import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";

Vue.use(VueRouter)

const routes = [
    { path: '/home', component: Home },
    { path: '/', component: Home },
    { path: '/contact', component: Contact }
]

export default new VueRouter({
    routes
})


