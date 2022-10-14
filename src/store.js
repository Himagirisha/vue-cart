import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      isAuthenticated: false,
      products:[]
    };
  },

  mutations: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
 

});
export default store;