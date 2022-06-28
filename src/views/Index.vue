<template>
    <div class="container w-full mx-auto sm:my-10 px-4">
        <div class="my-4">
            <div class="grid grid-cols-8 gap-6">
                <div class="col-span-12 lg:col-span-6">
                    <Slider />
                </div>
                <div class="col-span-12 md:col-span-3 lg:col-span-2">
                    <div class="">
                        <h3 class="font-bold uppercase">Category</h3>
                        <p class="text-xs font-bold text-gray-400">This is a list of category</p>
                    </div>
                    <Category />
                </div>
            </div>
        </div>
        <div class="my-4">
            <div class="my-2">
                <h3 class="font-bold uppercase text-teal-600">News Product</h3>
            </div>
            <div class="grid grid-cols-1 gap-1">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div class="bg-white rounded-lg p-3 text-center border border-gray-100 hover:scale-110 duration-200">
                <img src="../assets/html.png" class="inline-block">
                <h4 class="font-bold my-2">Iphone</h4>
                <p class="text-xs font-medium text-gray-400">Smartphone</p>
                <p class="text-md font-medium my-2 text-green-600">Rp. 1.000.000</p>
            </div>
        </div>
    </div>
</template>

<script>
import Category from '../components/Category.vue'
import Slider from '../components/Slider.vue'
export default {
    components: { Category, Slider }
}
</script>