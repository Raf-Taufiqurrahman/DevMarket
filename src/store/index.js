import { createStore } from "vuex";
import category from './module/category';
import slider from './module/slider';
import product from './module/product';
import auth from './module/auth';
export default createStore({
    modules: {
        category, slider, product, auth
    }
})