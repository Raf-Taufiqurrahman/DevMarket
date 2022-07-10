<template>
    <div class="w-full py-6 px-4">
        <div class="container mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap justify-center bg-white p-6 rounded-lg border">
                <img alt="ecommerce" class="w-1/2 object-cover object-center rounded border border-gray-200"
                    :src="product.image">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm text-gray-500 tracking-widest">{{ product.category }}</h2>
                    <h1 class="text-gray-700 text-3xl font-bold mb-1">{{ product.name }}</h1>
                    <p class="leading-relaxed text-justify text-gray-500 text-sm">{{ product.description }}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 mb-5 justify-between">
                        <span
                            class="text-base p-1.5 border border-white border-dashed bg-red-500 text-white rounded font-bold">
                            Discount {{ product.discount }} %
                        </span>
                        <h1 class="text-red-500 text-2xl line-through font-bold">Rp.
                            {{ moneyFormat(product.price) }}
                        </h1>
                    </div>
                    <div class="flex items-center">
                        <span class="font-bold text-2xl text-green-800">
                            Rp. {{ moneyFormat(calculateDiscount(product)) }}
                        </span>
                        <button @click.prevent="addToCart(product.id, calculateDiscount(product), product.weith)"
                            class="flex flex-row ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup() {
        const route = useRoute()

        const router = useRouter()

        const store = useStore()

        onMounted(() => {
            store.dispatch('product/getDetailProduct', route.params.slug)
        })

        const product = computed(() => {
            return store.state.product.product
        })

        function addToCart(product_id, price, weight) {
            const token = store.state.auth.token

            if (!token) {
                return router.push({ name: 'login' })
            }

            store.dispatch('cart/addToCart', {
                product_id: product_id,
                price: price,
                weight: weight,
                quantity: 1
            })
        }

        return { product, router, store, route, addToCart }
    }
}
</script>