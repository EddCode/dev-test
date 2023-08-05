import { logger } from '../../../../shared/logger'
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
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  editDetails: async (_: unknown, {id, data}: EditDetails, ctx: any) => {
    try {
      if (!ctx.user) {
        throw new Error('No autorizado. Debes iniciar sesión.')
      }

      const user = await useCases.update(id, data as User)
      return {id, ...user}
    } catch (error) {
      logger.error(error)
      throw error
    }
    
  }
}