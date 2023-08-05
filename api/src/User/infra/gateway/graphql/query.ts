export const userType = `
type UserName {
  first: String
  last: String
}

type UserModule {
  isActive: Boolean,
  balance: String,
  picture: String,
  age: Int,
  name: UserName,
  eyeColor: String,
  company: String,
  email: String,
  password: String,
  phone: String,
  address: String
}

input UserNameInput {
  first: String
  last: String
}

input UserInput {
  isActive: Boolean,
  balance: String,
  picture: String,
  age: Int,
  name: UserNameInput,
  eyeColor: String,
  company: String,
  email: String,
  password: String,
  phone: String,
  address: String
}


`

export const userMutation = `
  editDetails(id: String, data: UserInput): UserModule
`

export const userQuery = `
  showDetails(id: String): UserModule
`
