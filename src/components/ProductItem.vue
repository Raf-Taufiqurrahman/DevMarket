<template>
    <router-link :to="{ name: 'product-detail', params: { slug: product.slug } }"
        class="rounded-md bg-white border p-2 border-gray-200 relative" v-for=" product in products" :key="product.id">
        <img :src="product.image" class="rounded-t-lg w-full">
        <!-- <div class="absolute -top-4 left-[246px] md:left-[230px] bg-teal-800 text-white p-2 w-24 rounded">
            <h1 class="text-xs text-center">
                Rp. {{ moneyFormat(calculateDiscount(product)) }}
            </h1>
        </div> -->
        <div class="flex flex-col py-2">
            <h1 class="text-gray-700 font-bold text-lg">{{ product.name }}</h1>
            <p class="text-gray-500 text-sm">{{ product.description }}</p>
        </div>
        <div class="flex flex-row justify-between py-2 items-center text-center">
            <span class="text-base p-1.5 border border-white border-dashed bg-red-500 text-white rounded font-bold">
                Discount {{ product.discount }} %
            </span>
            <div>
                <h1 class="text-red-500 text-base line-through font-bold">Rp.
                    {{ moneyFormat(product.price) }}
                </h1>
                <h1 class="text-green-800 text-base font-bold">
                    Rp. {{ moneyFormat(calculateDiscount(product)) }}
                </h1>
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