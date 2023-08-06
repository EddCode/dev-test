import { useMutation, gql } from '@apollo/client'
import { useEffect } from 'react'

import { getUser } from '../../storage'

const UPDATE_USER_MUTATION = gql`
  mutation editDetails($id: String, $data: UserInput!) {
    editDetails(id: $id, data: $data) {
        isActive
        balance
        picture
        eyeColor
        email
        age
        address
        phone
    }
  }
`
export function useEditUser (payload, updateUserData, wasSubmitted) {
  const [updateUser] = useMutation(UPDATE_USER_MUTATION)

  useEffect(() => {
    wasSubmitted && mutation(payload)
  }, [payload, wasSubmitted])

  const mutation = async (data) => {
    const { data: { editDetails } } = await updateUser({
      variables: {
        id: getUser().uuid,
        data
      }
    })
    updateUserData(editDetails)
  }
}
