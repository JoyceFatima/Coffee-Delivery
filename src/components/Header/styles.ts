import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem auto;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Location = styled.li`
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['purple-100']};

  a {
    display: flex;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const Cart = styled.li`
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['yellow-100']};

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`
