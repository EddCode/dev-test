import { UserActions } from '../../../application'
import { User } from '../../../domain/UserRepository'
import {LowDB as repository} from '../../lowdb/UserRepository'
import type { UserId, EditDetails } from './types'

const useCases = UserActions(repository)

export const userResolvers = {
  showDetails: async (_: unknown, {id}: UserId) => {
    useCases.showInfo(id)
    return {id}
  }
}

export const userMutationResolver = {
  editDetails: async (_: unknown, {id, data}: EditDetails) => {
    useCases.update(id, data as User)
    return {id, ...data}
  }
}