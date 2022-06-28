import { createStore } from "vuex";
import category from './module/category';
import slider from './module/slider';
export default createStore({
    modules: {
        category, slider
    }
})