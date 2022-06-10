export default {
    namespaced: true,
    state() {
        return {
            activenum:0
        }
    },
    getters: {

    },
    mutations:{
        alternum(state,num){
            state.activenum = num;
        }
    },
    actions: {

    }
}