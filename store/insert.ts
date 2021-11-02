import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Post } from '~/data/models/post'

export const state = () => ({
  post: [] as Post[]
})
export type PostsState = ReturnType<typeof state>

export const getters: GetterTree<PostsState, any> = {
  post(state) {
    return state.post
  }
}

export const mutations: MutationTree<PostsState> = {
  INSERT(state, post) {
    state.post = post
  }
}

export const actions: ActionTree<PostsState, any> = {
  async Insert({ commit } , post) {
    const postsRes = await this.$repositories.insert().insertPost(post[0])
    commit('INSERT', postsRes)
  },
}
