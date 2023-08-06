export function saveUser (user) {
  return localStorage.setItem('user', JSON.stringify(user))
}
