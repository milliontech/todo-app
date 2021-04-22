import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem('todos'))
  },
  getters: {
    getTodos: state => {
      return state.todos;
    }
  },
  mutations: {
    todos(state, val) {
      state.todos = val;
      window.localStorage.setItem(
          'todos',
          JSON.stringify(val)
      );
    }
  },
  actions: {
    updateTodos(store, todos) {
      store.commit('todos', todos);
    }
  },
  modules: {},
});
