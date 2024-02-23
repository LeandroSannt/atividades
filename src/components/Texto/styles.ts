import { styled, css } from 'styled-components'

interface ContainerProps {
  color: string
  width: string
}

const Container = styled.h1<ContainerProps>`
  ${({ color, width }) => css`
    color: ${color};
    width: ${width};
  `}
`

const Header = styled.header`
  width: 100vw;
  height: 60px;
  background-color: gray;
  margin-top: 20px;

  .teste {
    font-size: 20px;
  }
`

export { Container, Header }
