import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    clickedTimes: 0,
    todos: [
      {id:1, text: 'message1', done: true },
      {id:2, text: 'message2', done: false }
    ]
  },
  mutations: {
    Loaded(state) {
      state.isLoading = !state.isLoading
    },
    AddTimes(state) {
      state.clickedTimes++
    }
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done)
  },
  actions: {
  },
  modules: {
  }
})
