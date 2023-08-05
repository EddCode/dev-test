import {signToken} from '../../../../shared/jwt'
import {Authentication} from '../../../application'
import {LowDB as repository} from '../../lowdb/loginRepository'
import type { DtoUserResponse, login } from './types'


const useCases = Authentication(repository)

export const authResolvers = {
  login: async (_: unknown, {username, password}: login) => {
    const data = await useCases.login(username, password)

    if (data) {
      const user: DtoUserResponse = {
        ...data,
        token: signToken({ email: data.email, uuid: data.uuid })
      } 

      return user

    }

    throw new Error('Email/Password are incorrect')
  }
}
