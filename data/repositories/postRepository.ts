import { AxiosResponse } from 'axios'
import Repository from '~/data/repositories/repository'
import { Post } from '~/data/models/post'

const url='http://talfigh.ventosco.com/testvue/api/savepost';
export default class PostRepository extends Repository {

  async getPost(id:number): Promise<Post> {
    const res = await this.axios.get('http://talfigh.ventosco.com/testvue/api/post/'+id)
    return res.data
  }

  async getPosts(): Promise<Post[]> {
    const res = await this.axios.get('http://talfigh.ventosco.com/testvue/api/posts')
    return res.data
  }

  async sendPost(post:any): Promise<AxiosResponse> {
    const res = await this.axios.post(url, post )
    return res.data
  }
}
