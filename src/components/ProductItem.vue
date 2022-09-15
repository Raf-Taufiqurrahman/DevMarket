<template>
    <router-link :to="{ name: 'product-detail', params: { slug: product.slug } }"
        class="rounded-lg bg-white border border-gray-200 relative" v-for=" product in products" :key="product.id">
        <img :src="product.image" class="w-full rounded-t-lg">
        <div class="p-2">
            <div class="flex flex-col py-2">
                <h1 class="text-gray-700 font-bold text-lg">{{ product.name }}</h1>
                <p class="text-gray-500 text-sm">{{ product.description }}</p>
            </div>
            <div class="flex flex-row justify-between py-2 items-center text-center">
                <span
                    class="text-base p-1.5 border border-white border-dashed bg-red-500 text-white rounded font-semibold">
                    Discount {{ product.discount }}%
                </span>
                <div>
                    <h1 class="text-red-500 text-base line-through font-mono">
                        <sup>Rp</sup> {{ moneyFormat(product.price) }}
                    </h1>
                    <h1 class="text-green-800 text-base font-mono">
                        <sup>Rp</sup> {{ moneyFormat(calculateDiscount(product)) }}
                    </h1>
                </div>
            </div>
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