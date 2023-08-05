export type User = {
  uuid: string,
  name: string,
  email: string
}

export interface AuthRepository {
  findByEmailAndPassword(email: string, password: string): Promise<void | User> 
}

