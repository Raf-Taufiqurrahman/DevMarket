<template>
    <div>
        <a href=""
            class="p-2 flex items-center border rounded-lg bg-white my-2 hover:scale-105 duration-200 hover:bg-gray-600 hover:text-white"
            v-for="category in categories" :key="category.id">
            <img :src="category.image" class="w-10">
            <div class="flex flex-col ml-2">
                <p class="font-bold">{{ category.name }}</p>
                <p class="text-xs font-bold text-gray-400">{{ category.product }} Product</p>
            </div>
        </a>
        <div v-if="categories.length >= 5">
            <a href=""
                class="p-2 flex items-center text-white justify-center border rounded-lg bg-teal-600 my-2 hover:bg-teal-500 hover:scale-110 duration-150">
                <p class="font-medium mr-2">See all category</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>
</template>

    <script>
    import { onMounted, computed } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    
    export default {
        setup() {
            const store = useStore()
    
            onMounted(() => {
                store.dispatch('category/getCategoryHome')
            })
    
            const categories = computed(() => {
                return store.state.category.categories
            })
    
            return { categories }
        }
    }
    </script>
