import { ShoppingCart, MapPin } from 'phosphor-react'

import { Cart, HeaderContainer, Location, NavBar } from './styles'

import thumbLogo from '../../assets/images/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={thumbLogo} alt="Logo da Coffee Delivery" />
      </div>

      <NavBar>
        <Location>
          <a href="">
            <MapPin size={30} weight="fill" />
            <span>Porto Alegre, RS</span>
          </a>
        </Location>
        <Cart>
          <a href="/shopping">
            <ShoppingCart size={30} weight="fill" />
          </a>
        </Cart>
      </NavBar>
    </HeaderContainer>
  )
}
