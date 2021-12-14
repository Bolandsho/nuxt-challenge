import Repository from '~/data/repositories/repository'
import { Post } from '~/data/models/post'

export default class PostRepository extends Repository {
  async getPosts(): Promise<Post[]> {
    const res = await this.axios.get('http://talfigh.ventosco.com/testvue/api/posts')
    return res.data.data
  };
    async getPost(id:any): Promise<Post> {
        const res = await this.axios.get('http://talfigh.ventosco.com/testvue/api/post/'+id)
        return res.data
    }
    ;async savePost(post:any): Promise<Post> {
        const res = await this.axios.post('http://talfigh.ventosco.com/testvue/api/savepost',post)
        return res.data
    }
}
