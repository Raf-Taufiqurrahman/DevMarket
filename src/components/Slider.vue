<template>
    <div class="scroll-ml-10 snap-center w-4/6 shrink-0" v-for="slider in sliders" :key="slider.id">
        <img :src="slider.image" class="object-cover object-center w-full rounded-lg" />
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        onMounted(() => {
            store.dispatch('slider/getSlider')
        })

        const sliders = computed(() => {
            return store.state.slider.sliders
        })

        return { sliders }
    }
}
</script>