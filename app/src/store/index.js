import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import textModule from "./modules/text"

export const store = new Vuex.Store({
    modules: {
        textModule
    },
    state: {
        users: [
            {name: "haxul1", lastname: "starv"},
            {name: "haxul2", lastname: "starodubov"},
        ],
        status: "disable"
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getStatus(state) {
            return state.status
        }
    },
    mutations: {
        addUser(state, payload) {
            const user = {
                name: payload.firstname,
                lastname: payload.lastname
            }
            state.users.push(user)
        },

        setActiveStatus(state) {
            state.status = "active"
        },
        setPendingStatus(state) {
            state.status = "pending"
        },
        setDisableStatus(state) {
            state.status = "disable"
        }
    },
    actions: {
        sendData(store, payload) {
            store.commit("setPendingStatus")
            setTimeout(() => {
                store.commit("setActiveStatus")
            }, 2000)
        }
    }
})