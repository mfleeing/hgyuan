import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tableData: []
    },
    mutations: {
        changeData(state, newdata) {
            state.tableData = newdata
        }
    },
    actions: {

    },
});