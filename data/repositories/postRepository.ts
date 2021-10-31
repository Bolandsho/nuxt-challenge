import Repository from '~/data/repositories/repository'
import { Post } from '~/data/models/post'

export default class PostRepository extends Repository {
  async getPosts(): Promise<Post[]> {
    const res = await this.axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
  }
}
