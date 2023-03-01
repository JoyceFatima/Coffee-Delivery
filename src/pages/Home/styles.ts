import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;
`
export const ContentTitle = styled.div`
  width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    font-size: 48px;
    padding-bottom: 0.5rem;
  }
`
export const Grid = styled.div`
  padding-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const SubContent = styled.div`
  display: flex;
  padding: 0.7rem 0;
  gap: 0.5rem;

  align-items: center;

  svg {
    padding: 1rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-300']};
  }
`

export const SubContentTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  line-height: 1.3;
  font-size: 32px;
  padding-bottom: 0.5rem;
`
