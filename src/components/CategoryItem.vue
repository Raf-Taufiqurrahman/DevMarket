<template>
    <div v-for="category in categories" :key="category.id">
        <a href=""
            class="p-2 flex flex-row items-center gap-2 rounded-md bg-white border text-gray-700 hover:bg-sky-600 hover:text-white transition-all duration-300">
            <img :src="category.image" class="object-cover w-10" />
            <h1 class="italic text-sm">{{ category.name }}</h1>
        </a>
    </div>
</template>

    <script>
    import { onMounted, computed } from 'vue'
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
