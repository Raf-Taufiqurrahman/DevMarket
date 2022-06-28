import Api from '../../api/Api';

const category = {
    namespaced: true,

    state: {
        categories: [],
    },
    mutations: {
        SET_CATEGORIES(state, data){
            state.categories = data
        }
    },
    actions: {
        getCategoryHome({commit}){
            Api.get('/landing/category')
            .then(response => {
                commit('SET_CATEGORIES', response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
}

export default category