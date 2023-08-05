export type User = {
  guid: string,
  isActive: boolean,
  balance: string,
  picture: string,
  age: number,
  eyeColor: string,
  name: {
    first: string,
    last: string
  },
  company: string,
  email: string,
  password: string,
  phone: string,
  address: string
  [key: string | symbol]: unknown;
}

export interface UserRepository {
  showDetails: (id: string) => Promise<User>,
  editDetails: (id: string, data: User) => Promise<User>,
}

export interface DataIterator extends IterableIterator<[string, unknown]> {
  [key: string | number | symbol]: unknown;
}