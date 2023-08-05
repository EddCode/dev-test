import {db} from '../../../infraestructure/db/lowdb'
import { UserRepository, User} from '../../domain/UserRepository'

async function editDetails(id: string, data: User): Promise<User> {
  if (!db.data) {
    return Promise.reject('No data')
  }
  try {
    const userIndex = db.data.users.findIndex((user) => user.guid === id);
    if (userIndex < 0) return Promise.reject('User not Found');

    const user = db.data.users[userIndex] as User;

    for (const key in data) {
      if (user.hasOwnProperty(key)) {
        if (key !== 'name') {
          user[key] = data[key];
          continue
        }

        user.name = {
          ...user.name,
          ...data[key]
        }
        
      }
    }

    await db.write()
    return user
  }catch(err) {
    return Promise.reject(err)
  }
}

async function showDetails(id: string): Promise<User>{
  const user = db.data?.users.find(user => user.guid === id ) as User
  return Promise.resolve(user)
}

export const LowDB: UserRepository = {
  showDetails,
  editDetails
}
