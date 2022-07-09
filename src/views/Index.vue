<template>
    <div class="w-full py-6 px-4">
        <div class="container mx-auto">
            <div class="flex flex-col">
                <h1 class="title">List Category</h1>
                <p class="subTitle">This is a list of category</p>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 py-5">
                <Category />
            </div>
            <div class="flex flex-col">
                <h1 class="title">Product</h1>
                <p class="subTitle">This is a list of product</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 py-5 pb-14 md:pb-0">
                <Product />
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Category from '../components/CategoryItem.vue';
import Product from '../components/ProductItem.vue'
export default {
    components: { Hero, Category, Product }
}
</script>