export default {
    actions: {
        async  fetchComments(ctx, id = 1) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            const data = await res.json();
            ctx.commit('updateComments', data)
        }
    },
    state: {
        comments: [],
    },
    getters: {
        allComments(state) {
            return state.comments
        }
    },
    mutations: {
        updateComments(state, comments) {
            state.comments = comments;
        }
    },

}