import Vue from 'vue'
import Vuex from 'vuex'
import database from '@/store/data';
import VuexORM from "@vuex-orm/core";

console.log(2);

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


export default store
