export default  {
    namespaced: true,
    state : {
        text : "nothing"
    },
    getters: {
      getText(state) {
          return state.text
      }
    },
    mutations: {
        setSomething(state) {
            state.text = "something"
        }
    },

    actions: {
        setSomething(store) {
            store.commit("setSomething")
        }
    }
}