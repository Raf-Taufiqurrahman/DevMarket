<template>
    <div>
        <vueper-slides slide-image-inside autoplay>
            <template #arrow-left>
                <i class="icon icon-arrow-left" />
            </template>
            <vueper-slide v-for="(slider, i) in sliders" :key="i" :image="slider.image" />
            <template #arrow-right>
                <i class="icon icon-arrow-right" />
            </template>
        </vueper-slides>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        VueperSlides,
        VueperSlide
    },

    setup() {
        const store = useStore()

        onMounted(() => {
            store.dispatch('slider/getSlider')
        })

        const sliders = computed(() => {
            return store.state.slider.sliders
        })

        return {
            sliders
        }
    }
}
</script>

<style scoped>
.vueperslide__image {
    transform: scale(1.5) rotate(-10deg);
}

.vueperslide__title {
    font-size: 7em;
    opacity: 0.7;
}
</style>