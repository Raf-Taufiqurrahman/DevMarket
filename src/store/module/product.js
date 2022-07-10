import Api from "../../api/Api"

const product = {
    namespaced: true,
    state: {
        products: [],
        product : {},
    },
    mutations:{
        GET_PRODUCTS(state, data){
            state.products = data
        },
        DETAIL_PRODUCT(state, product){
            state.product = product
        }

    },
    actions: {
        async getLandingProducts({commit}){
            await Api.get('/landing/product')
            .then(response => {
                commit('GET_PRODUCTS', response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getDetailProduct({commit}, slug){
            Api.get(`/product/${slug}`)
            .then(response => {
                commit('DETAIL_PRODUCT', response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}

export default product