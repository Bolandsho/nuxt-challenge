import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Post } from '~/data/models/post'

export const state = () => ({
  postList: [] as Post[]
})
export type PostsState = ReturnType<typeof state>

export const getters: GetterTree<PostsState, any> = {
  posts(state) {
    return state.postList
  }
}

export const mutations: MutationTree<PostsState> = {
  SET_POSTS(state, posts) {
    state.postList = posts
  }
}

export const actions: ActionTree<PostsState, any> = {
  async getPosts({ commit }) {
    const postsRes = await this.$repositories.posts().getPosts()
    commit('SET_POSTS', postsRes)
  }
}
