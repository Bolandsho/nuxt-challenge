import Repository from '~/data/repositories/repository'
import { Post } from '~/data/models/post'

export default class PostRepository extends Repository {
  async getPosts(page: number): Promise<Post[]> {
    const res = await this.axios.get(`http://talfigh.ventosco.com/testvue/api/posts?page=${page}`)
    return res.data
  }
}
