<template>
    <div class="w-full py-20 px-4">
        <div class="container mx-auto">
            <div class="flex flex-col justify-center items-center">
                <div class="w-full md:w-6/12 bg-white p-6 rounded shadow-sm">
                    <div class="py-3">
                        <h1 class="text-gray-700 text-xl font-bold">Login Page</h1>
                        <p class="text-xs text-gray-500">Sign in to your account</p>
                    </div>
                    <form @submit.prevent="login">
                        <div class="py-3">
                            <span
                                class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Email
                            </span>
                            <input type="email"
                                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                v-model="user.email" />
                            <small v-if="validation.email" class="text-red-400">{{ validation.email[0] }}</small>
                        </div>
                        <div class="py-3">
                            <span
                                class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Password
                            </span>
                            <input type="password"
                                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                v-model="user.password" />
                            <small v-if="validation.password" class="text-red-400">{{ validation.password[0] }}</small>
                        </div>
                        <div class="py-3 flex flex-row justify-between items-center">
                            <button :to="{ name: 'register' }"
                                class="bg-sky-600 hover:bg-sky-700 p-2 rounded-lg text-white text-xs sm:text-sm">
                                Login
                            </button>
                            <h1 class="text-xs">Don't have an account ?
                                <router-link :to="{ name: 'register' }" class="underline text-sky-600">
                                    Register
                                </router-link>
                            </h1>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup() {

        const validation = ref([])

        const store = useStore()

        const router = useRouter()

        const user = reactive({
            email: '',
            password: '',
        })

        function login() {
            let email = user.email
            let password = user.password

            store.dispatch('auth/login', {
                email, password
            })
                .then(() => {
                    router.push({ name: 'dashboard' })
                })
                .catch(error => {
                    validation.value = error.errors
                })
        }

        return { login, user, validation }
    }

}
</script>