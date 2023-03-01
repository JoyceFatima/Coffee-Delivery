import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Container = styled.div`
  margin: 1rem;
  padding: 2rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const DeliveryContent = styled.div``

export const Location = styled.div`
  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`

export const PaymentContent = styled.div``

export const Payment = styled.div`
  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const FormOfPayment = styled.div`
  display: flex;
  gap: 1rem;
`

export const Button = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;

  min-width: 200px;

  white-space: nowrap;
  position: initial;

  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  span {
    font-size: 14px;
    padding-left: 2rem;
    display: inline-block;
    text-transform: uppercase;
  }

  svg {
    position: absolute;
    color: ${(props) => props.theme['purple-300']};
  }
`
