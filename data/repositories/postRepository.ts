import Repository from '~/data/repositories/repository'
import { Post } from '~/data/models/post'

export default class PostRepository extends Repository {
    async getPosts(): Promise<Post[]> {
        const res = await this.axios.get('posts')
        return res.data
    }

    async getPost(postId: number): Promise<Post[]> {
        const res = await this.axios.get(`posts/${postId}`)
        return res.data
    }

    async createPost(post: Post): Promise<Post[]> {
        const res = await this.axios.get(`savepost`, post)
        return res.data
    }
}
