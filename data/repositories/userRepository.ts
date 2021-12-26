import Repository from '~/data/repositories/repository'


export default class UserRepository extends Repository {
  async sendUserCredential(params: any): Promise<boolean> {

    // I'm assuming that the servers return operation  status
    const res = await this.axios.post('http://talfigh.ventosco.com/testvue/api/savepost', params)

    return (res.status === 200)
  }
}
