import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from "~/data/repositories/postRepository";

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor ($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  posts = () => new PostRepository(this.axios)

}
