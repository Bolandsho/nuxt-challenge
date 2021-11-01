import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Post } from '~/data/models/post'

export const state = () => ({
  post:{},
  postList: [] as Post[]
})
export type PostsState = ReturnType<typeof state>

export const getters: GetterTree<PostsState, any> = {
  post(state) {
    return state.post
  },
  posts(state) {
    return state.postList
  }
}

export const mutations: MutationTree<PostsState> = {
  SET_POST(state, post) {
    state.post = post
  },
  SET_POSTS(state, posts) {
    state.postList = posts
  }
}

export const actions: ActionTree<PostsState, any> = {
  async getPost({ commit },id:number) {
    const postRes = await this.$repositories.posts().getPost(id)
    commit('SET_POST', postRes)
  },

  async getPosts({ commit }) {
    const postsRes = await this.$repositories.posts().getPosts()
    commit('SET_POSTS', postsRes)
  },

  async sendPost({ commit },post) {
    const postRes = await this.$repositories.posts().sendPost(post)
    commit('SET_POST', postRes)
  },


}
