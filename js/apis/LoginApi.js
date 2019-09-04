import { request } from '~/Common/'

export default {
  async login(data) {
    await request()
      .url('/apis/auth/login')
      .data(data)
      .promise()
  }
}
