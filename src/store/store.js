import {createStore} from 'vuex';
import comments from "@/store/modules/coments";

import categories from "@/store/modules/categories";

const store = createStore({
    modules : {
        comments,
        categories
    }
});

export default store;