import Vue from 'vue';
import Vuex from 'vuex';
import counter from "@/components/store/modules/counter";

import * as actions from '/src/components/store/actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },

    getters: {

        value: state => {
            return state.value
        }
    },

    mutations: {

        updateValue: (state, payload) => {
            state.value = payload
        }
    },

    actions,
    modules: {
        counter
    }
});
