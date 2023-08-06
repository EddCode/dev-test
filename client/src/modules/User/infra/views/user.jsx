import { useEffect, useState } from 'react'

import { Content } from './components/Content'
import { EditUser } from './components/EditUser'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { StyledProfileContentContainerDiv, StyledFormContainerDiv, StyledBalanceP, StyledBalanceSPAN } from './user.styled'

import { useUserDetails } from '@/modules/User/infra/gateway'

export function User () {
  const [showBalance, setShowBalance] = useState(false)
  const [openEditForm, setOpenEditForm] = useState(false)
  const [data, setData] = useState({})

  const { isLoading, data: info, error, username } = useUserDetails()

  useEffect(() => {
    setData(info)
  }, [info])

  if (error) {
    return 'Unexpected error'
  }

  if (isLoading || !data) {
    return 'Loading'
  }

  const toogleShowBalance = () => setShowBalance(!showBalance)
  const toogleOpenForm = () => setOpenEditForm(!openEditForm)

  return (
    <StyledFormContainerDiv>
      <NavBar name={username} />
      <StyledProfileContentContainerDiv>
        <Header
          picture={data.picture}
          toogleShowBalance={toogleShowBalance}
          toogleOpenForm={toogleOpenForm}
        />
        {showBalance && (
          <StyledBalanceP>
            Balance <StyledBalanceSPAN>{data.balance}</StyledBalanceSPAN>
          </StyledBalanceP>
        )}
        {!openEditForm
          ? (
          <Content
            address={data.address}
            age={data.age}
            company={data.company}
            email={data.email}
            eyeColor={data.eyeColor}
            isActive={data.isActive}
            phone={data.phone}
          />
            )
          : <EditUser updateUserData={setData} isActive={data.isActive}/>
        }

      </StyledProfileContentContainerDiv>
    </StyledFormContainerDiv>
  )
}
