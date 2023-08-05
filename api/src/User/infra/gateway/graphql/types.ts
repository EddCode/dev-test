export type UserId = {
  id: string
}

export type EditDetails = {
  id: string,
  data: DtoUserResponse
}

export type DtoUserResponse = {
  guid: string | undefined,
  isActive: boolean,
  balance: string,
  picture: string,
  age: number,
  eyeColor: string,
  company: string,
  email: string,
  password: string,
  phone: string,
  address: string
}
