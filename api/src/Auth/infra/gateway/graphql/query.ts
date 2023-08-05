export const authType = `
type User{
  uuid: String,
  name: String,
  email: String,
  token: String
}`

export const authQuery = `login(username: String, password: String): User`
