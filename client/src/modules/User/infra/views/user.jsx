import { useState } from 'react'

import { Content } from './components/Content'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { StyledProfileContentContainerDiv, StyledFormContainerDiv, StyledBalanceP, StyledBalanceSPAN } from './user.styled'

import { useUserDetails } from '@/modules/User/infra/gateway'

export function User () {
  const [showBalance, setShowBalance] = useState(false)

  const { isLoading, data, error, username } = useUserDetails()

  if (error) {
    return 'Unexpected error'
  }

  if (isLoading || !data) {
    return 'Loading'
  }

  const toogleShowBalance = () => setShowBalance(!showBalance)

  return (
    <StyledFormContainerDiv>
      <NavBar name={username} />
      <StyledProfileContentContainerDiv>
        <Header picture={data.picture} toogleShowBalance={toogleShowBalance} />
        {showBalance && (
          <StyledBalanceP>
            Balance <StyledBalanceSPAN>{data.balance}</StyledBalanceSPAN>
          </StyledBalanceP>
        )}
        <Content
          address={data.address}
          age={data.age}
          company={data.company}
          email={data.email}
          eyeColor={data.eyeColor}
          isActive={data.isActive}
          phone={data.phone}
        />
      </StyledProfileContentContainerDiv>
    </StyledFormContainerDiv>
  )
}
