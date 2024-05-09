import {createStore} from 'vuex';
import comments from "@/store/modules/coments";

const store = createStore({
    modules : {
        comments
    }
});

export default store;