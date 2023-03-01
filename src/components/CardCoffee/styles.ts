import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 4rem;
`

export const Card = styled.div`
  max-width: 16rem;
  max-height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    padding: 0.5rem 0;
  }
`
export const Type = styled.div`
  margin-top: 1rem;
  border-radius: 18px;
  padding: 0.5rem;
  color: ${(props) => props.theme['yellow-500']};
  font-weight: bold;
  background-color: ${(props) => props.theme['yellow-100']};
`

export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 18px;
`

export const Description = styled.div`
  color: ${(props) => props.theme['base-label']};
`

export const ShoppingCard = styled.div`
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
`

export const Value = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 32px;
  color: ${(props) => props.theme['base-text']};
  margin-right: 1rem;
`

export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};

  button {
    padding: 0 1rem;
    background-color: transparent;
    color: ${(props) => props.theme['purple-300']};
    border: transparent;
  }
`

export const IconShoppingCard = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-500']};

  border-radius: 8px;
  border: 0;
  padding: 0.5rem;
  margin-left: 1rem;
`
