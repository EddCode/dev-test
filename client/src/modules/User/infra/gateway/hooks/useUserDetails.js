import { useQuery, gql } from '@apollo/client'

import { getUser } from '../../storage'

const UserInfo = gql`
query GetUserData($id: String!) {
    showDetails(id: $id) {
        isActive
        balance
        picture
        balance
        age
        eyeColor
        company
        email
        phone
        address
    }
}
`

export function useUserDetails () {
  const { loading, error, data } = useQuery(UserInfo, {
    variables: {
      id: getUser().uuid
    }
  })

  const { name } = getUser()

  return { loading, error, data: data?.showDetails, username: name }
}
