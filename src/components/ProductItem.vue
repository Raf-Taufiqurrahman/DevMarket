<template>
    <router-link :to="{ name: 'product-detail', params: { slug: product.slug } }"
        class="rounded-md bg-white border p-2 border-gray-200 relative" v-for=" product in products" :key="product.id">
        <img :src="product.image" class="rounded-t-lg w-full">
        <div class="absolute -top-4 left-[270px] md:left-[230px] bg-teal-800 text-white p-1 rounded-md">
            <h1>Rp.{{ moneyFormat(calculateDiscount(product)) }}</h1>
        </div>
        <div class="flex flex-col py-2">
            <h1 class="text-gray-700 font-bold text-lg">{{ product.name }}</h1>
            <p class="text-gray-500 text-sm">{{ product.description }}</p>
        </div>
        <div class="flex flex-row justify-between py-2 items-center">
            <span class="bg-cyan-600 text-white rounded p-1 text-xs">Discount {{ product.discount }} %</span>
            <h1 class="text-red-400 line-through"> Rp. {{ moneyFormat(product.price) }}</h1>
        </div>
    </router-link>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        onMounted(() => {
            store.dispatch('product/getLandingProducts')
        })

        const products = computed(() => {
            return store.state.product.products
        })

        return { products }
    }
}
</script>