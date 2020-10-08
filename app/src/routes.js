import Vue from "vue"
import VueRouter from "vue-router"
import Transition from "./components/Transition";
import Input from "./components/Input";
import Texter from "./components/Texter";

Vue.use(VueRouter)

const routes = [
    {
        path: "/tran",
        component: Transition,
        beforeEnter(from, to ,next ){
            next()
        }
    },
    {
        path: "/input",
        component: Input
    },
    {
        path: "/text",
        component: Texter
    }
]

export const router = new VueRouter({
    routes,
    mode: "history"
})