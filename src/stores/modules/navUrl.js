export default {
    state: {
        nav: {},
        rule: {}
    },
    getters: {
        getNav: state => {
            return state;
        }
    },
    actions: {
        setNav({
            commit
        }, obj) {
            commit("setNav", obj);
        }
    },
    mutations: {
        setNav(state, obj) {
            state.nav = obj
        }
    }
}