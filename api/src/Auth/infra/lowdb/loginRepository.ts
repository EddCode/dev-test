import {db} from '../../../infraestructure/db/lowdb'
import { AuthRepository, User } from '../../domain/AuthRepository'

async function findByEmailAndPassword(email: string, password: string): Promise<User | void> {
  const user = db.data?.users.find(user => user.email === email && user.password === password )

  if (user) {
    return Promise.resolve({
      uuid: user.guid,
      email: user.email,
      name: `${user.name.first} ${user.name.last}`
    })
  }

  return Promise.resolve()
}

export const LowDB: AuthRepository = {
  findByEmailAndPassword
}
