import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from "~/data/repositories/postRepository";
import InsertRepository from "~/data/repositories/insertRepository";

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor ($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  posts = () => new PostRepository(this.axios)
  insert = () => new InsertRepository(this.axios)

}
