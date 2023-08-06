import { useQuery, gql } from '@apollo/client'

const Login = gql`
query GetLoginData($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      uuid
      name
      token
    }
}
`
export function useLogin (email, password) {
  const { loading, error, data, refetch } = useQuery(Login, {
    variables: {
      username: email,
      password
    },
    skip: true
  })

  return { loading, error, data, refetch }
}
