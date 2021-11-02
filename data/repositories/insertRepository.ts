import Repository from '~/data/repositories/repository'
import { Post } from '~/data/models/post'

export default class InsertRepository extends Repository {
  async insertPost(data: []){
    const res = await this.axios.post('http://talfigh.ventosco.com/testvue/api/savepost',data,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return res.data
  }
}
