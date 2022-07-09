import Api from "../../api/Api"

const product = {
    namespaced: true,
    state: {
        products: [],
    },
    mutations:{
        SET_PRODUCTS(state, data){
            state.products = data
        }
    },
    actions: {
        async getLandingProducts({commit}){
            await Api.get('/landing/product')
            .then(response => {
                commit('SET_PRODUCTS', response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}

export default product