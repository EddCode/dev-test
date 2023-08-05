import { logger } from '../../../../shared/logger'
import { UserActions } from '../../../application'
import { User } from '../../../domain/UserRepository'
import {LowDB as repository} from '../../lowdb/UserRepository'
import type { UserId, EditDetails } from './types'

const useCases = UserActions(repository)

export const userResolvers = {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  showDetails: async (_: unknown, {id}: UserId,  ctx: any) => {
    try {
      if (!ctx.user) {
        throw new Error('Unauthorized. You should login.')
      }
  
      const user = await useCases.showInfo(id)
      return { ...user }
    }catch(err){
      logger.error(err)
      throw err
    }
  }
}

export const userMutationResolver = {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  editDetails: async (_: unknown, {id, data}: EditDetails, ctx: any) => {
    try {
      if (!ctx.user) {
        throw new Error('Unauthorized. You should login.')
      }

      const user = await useCases.update(id, data as User)
      return {id, ...user}
    } catch (error) {
      logger.error(error)
      throw error
    }
    
  }
}