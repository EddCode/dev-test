import { JSONFile, Low } from 'lowdb'
import path from 'path'
import { User } from '../../User/domain/UserRepository'

type UserUids = {
  _id: string
}

type UserDB = UserUids & User

type Users = {
      users: UserDB[] | []
}

const file = path.join(__dirname, './data/users.json')
const adapter = new JSONFile<Users>(file)
export const db = new Low<Users>(adapter)


