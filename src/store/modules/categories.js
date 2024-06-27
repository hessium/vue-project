
export default {
    actions: {
        async fetchCategories(context) {
            const res = await fetch("./db.json");
            const data = await res.json();
            const categories = await data[0].categories;
            context.commit('updateCategories', categories);
        }
    },
    state: {
        categories: [],
    },
    getters: {
        allCategories(state) {
            return state.categories;
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories;
        },
        selectedCat(state, payload) {
           state.categories.map((item) => {
                if(item.id === payload) {
                    item.selected = true
                } else {
                   item.selected = false
               }
            })
        },

    },

}