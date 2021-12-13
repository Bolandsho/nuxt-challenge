import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Credentials } from '~/data/models/credentials'

export const state = () => ({

  credentials: {
    firstName: '',
    lastName: '',
    email: ''
  } as Credentials
})
export type UserState = ReturnType<typeof state>

export const getters: GetterTree<UserState, any> = {
  credentials(state) {
    return state.credentials
  }
}

export const mutations: MutationTree<UserState> = {

  SET_CREDENTIALS(state, creds: Credentials) {
    Object.assign(state.credentials, creds)
  }
}

export const actions: ActionTree<UserState, any> = {

  async SetCredentials({ commit }, payload) {
    try {
      const res = await this.$repositories.saveCredentials().sendUserCredential()

      if (res)
        commit('SET_CREDENTIALS', payload)

    } catch (error) {

    }
  }
}
