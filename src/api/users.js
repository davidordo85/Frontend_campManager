import client from './client';

export const forgotPassword = async create => {
  try {
    const url = '/api/v1/auth/forgotpassword'
    const forgotPasswordData = new FormData()
    for (let item in create) {
      forgotPasswordData.append(item, create[item])
    }
    return await client.post(url, forgotPasswordData, {
      headers:{
        "content-type": "application/json"
      }
    })
  } catch (error) {
    throw Error('Server Error', error)
  }
}