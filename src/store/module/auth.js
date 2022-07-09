import Api from '../../api/Api';
const auth = {
    namespaced: true,
    state: {
        token : localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || {},
    },
    mutations: {
        AUTH_SUCCESS(state, token, user) {
            state.token   = token 
            state.user    = user 
        },
        GET_USER(state, user) {
            state.user = user
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                Api.post('/login', {
                    email: user.email,
                    password: user.password,         
                })                   
                .then(response => {
                    const token = response.data.token
                    const user  = response.data.user

                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(user))

                    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`

                    commit('AUTH_SUCCESS', token, user)

                    commit('GET_USER', user)

                    resolve(response)
                })
                .catch(error => { 
                    localStorage.removeItem('token')

                    reject(error.response.data)
                })
            })
        },
register({ commit }, user) {

            //define callback promise
            return new Promise((resolve, reject) => {

                //send data ke server
                Api.post('/register', {

                        //data yang dikirim ke serve untuk proses register
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        password_confirmation: user.password_confirmation

                    })

                    .then(response => {

                        //define variable dengan isi hasil response dari server
                        const token = response.data.token
                        const user = response.data.user

                        //set localStorage untuk menyimpan token dan data user
                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))

                        //set default header axios dengan token
                        Api.defaults.headers.common['Authorization'] = "Bearer " +  token

                        //commit auth success ke mutation
                        commit('AUTH_SUCCESS', token, user)

                        //resolve ke component dengan hasil response
                        resolve(response)

                    }).catch(error => {

                        //jika gagal, remove localStorage dengan key token
                        localStorage.removeItem('token')

                        //reject ke component dengan hasil response
                        reject(error.response.data)

                    })

            })
        },
        getUser({ commit }) {
            const token = localStorage.getItem('token')

            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            Api.get('/user')
            .then(response => {      
                commit('GET_USER', response.data.user)
            })
        },
    },
    getters: {
        currentUser(state) {
            return state.user
        },
        isLoggedIn(state) {
            return state.token
        },
    }
}

export default auth