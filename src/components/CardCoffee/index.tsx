import {
  Amount,
  Card,
  Container,
  Description,
  IconShoppingCard,
  ShoppingCard,
  Title,
  Type,
  Value,
} from './styles'

import { useEffect, useState } from 'react'

import { ShoppingCart } from 'phosphor-react'

import { getCoffee } from '../../service/CoffeeService/getCoffee'

interface CoffeeService {
  id: number
  img: string
  type: string
  title: string
  description: string
  value: number
}

interface CoffeeServiceItems extends Array<CoffeeService> {}

export function CardCoffee() {
  const [card, setCard] = useState<CoffeeServiceItems>([])

  useEffect(() => {
    setCard(getCoffee())
  }, [])

  return (
    <Container>
      {card.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.img} alt="" />

            <Type>{item.type}</Type>

            <Title>{item.title}</Title>
            <Description>{item.description}</Description>

            <ShoppingCard>
              <span>R$ </span>
              <Value>{item.value}</Value>
              <Amount>
                <button>-</button>
                <span> 1 </span>
                <button>+</button>
              </Amount>
              <IconShoppingCard>
                <ShoppingCart size={23} weight="fill" />
              </IconShoppingCard>
            </ShoppingCard>
          </Card>
        )
      })}
    </Container>
  )
}
