import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from "~/data/repositories/postRepository";
import UserRepository from "~/data/repositories/userRepository";

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  posts = () => new PostRepository(this.axios)

  public saveCredentials() {
    return new UserRepository(this.axios)
  }

}
