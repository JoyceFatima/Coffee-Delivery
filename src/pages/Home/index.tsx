import {
  Content,
  ContentTitle,
  Grid,
  SubContent,
  SubContentTitle,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import thumberIllustrationCoffee from '../../assets/images/IllustrationCoffee.svg'

import { CardCoffee } from '../../components/CardCoffee'

export function Home() {
  return (
    <div>
      <Content>
        <ContentTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <Grid>
            <SubContent>
              <ShoppingCart size={23} weight="fill" />
              <span>Compra simples e segura</span>
            </SubContent>

            <SubContent>
              <Package size={23} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </SubContent>

            <SubContent>
              <Timer size={23} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </SubContent>

            <SubContent>
              <Coffee size={23} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </SubContent>
          </Grid>
        </ContentTitle>

        <div>
          <img src={thumberIllustrationCoffee} alt="Illustration Coffee" />
        </div>
      </Content>

      <main>
        <SubContentTitle>Nossos cafés</SubContentTitle>
        <CardCoffee />
      </main>
    </div>
  )
}
