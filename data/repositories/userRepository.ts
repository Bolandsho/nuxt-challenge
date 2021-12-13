import Repository from '~/data/repositories/repository'


export default class UserRepository extends Repository {
  async sendUserCredential(): Promise<boolean> {
    // I'm assuming that the servers return operation  status
    const res = await this.axios.get('http://talfigh.ventosco.com/testvue/api/savepost')

    return (res.status === 200)
  }
}
