const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: state => {
        state.counter++;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
    increment: context => {
        context.commit('increment')
    },

    decrement: ({commit}) => {
        commit('decrement')
    },

    asyncIncrement: context => {
        setTimeout(() => {
            context.commit('increment')
        }, 1000)
    },
    asyncDecrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by)
        }, payload.duration)
    }
};

export default {
    state, mutations, actions, getters
}
