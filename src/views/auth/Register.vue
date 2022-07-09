<template>
    <div class="w-full py-20 px-4">
        <div class="container mx-auto">
            <div class="flex flex-col justify-center items-center">
                <div class="w-full md:w-6/12 bg-white p-6 rounded shadow-sm">
                    <div class="py-3">
                        <h1 class="text-gray-700 text-xl font-bold">Register Page</h1>
                        <p class="text-xs text-gray-500">Create your account</p>
                    </div>
                    <form @submit.prevent="register">
                        <div class="py-3">
                            <span
                                class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Full Name
                            </span>
                            <input type="text"
                                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                v-model="user.name" />
                            <small v-if="validation.name" class="text-red-400">{{ validation.name[0] }}</small>
                        </div>
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
                        <div class="py-3">
                            <span
                                class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Password Confirmation
                            </span>
                            <input type="password"
                                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                v-model="user.password_confirmation" />
                        </div>
                        <div class="py-3 flex flex-row justify-between items-center">
                            <button class="bg-sky-600 p-2 rounded-lg text-white text-sm hover:bg-sky-700" type="submit">
                                Register
                            </button>
                            <h1>Already registered ?
                                <router-link :to="{ name: 'login' }" class="underline text-sky-600">
                                    Login
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Api from '../../api/Api'
import store from '../../store'

export default {
    setup() {

        const validation = ref([])

        const router = useRouter()

        const user = reactive({
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        })

        function register() {
            let name = user.name
            let email = user.email
            let password = user.password
            let password_confirmation = user.password_confirmation

            store.dispatch('auth/register', {
                name, email, password, password_confirmation
            })
                .then(() => {
                    router.push({ name: 'dashboard' })
                })
                .catch(error => {
                    validation.value = error.errors
                })
        }

        return { register, user, validation }
    }

}
</script>