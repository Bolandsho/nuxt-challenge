import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Post } from '~/data/models/post'

export const state = () => ({
  postList: [] as Post[],
    post:{}
})
export type PostsState = ReturnType<typeof state>

export const getters: GetterTree<PostsState, any> = {
  posts(state) {
    return state.postList
  },
    post(state) {
        return state.post
    }
}

export const mutations: MutationTree<PostsState> = {
  SET_POSTS(state, posts) {
    state.postList = posts
  },
    SET_POST(state, post) {
        state.post = post
    }
}

export const actions: ActionTree<PostsState, any> = {
  async getPosts({ commit }) {
    const postsRes = await this.$repositories.posts().getPosts()
    commit('SET_POSTS', postsRes)
  },
    async getPost({ commit },payload) {
        const postsRes = await this.$repositories.posts().getPost(payload.id)
        commit('SET_POST', postsRes)
    },
    async savePost({ commit },payload) {
        const postsRes = await this.$repositories.posts().savePost(payload)
        commit('SET_POST', postsRes)
    },
}
