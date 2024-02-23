import { Container, Header } from './styles'

interface PessoaProps {
  valorAtual: number
  nome?: string
  sobrenome?: string
  peso?: number
  altura?: number
}

interface TextoProps {
  text: string
  color: string
  width: string
  pessoa: PessoaProps
}

const Texto = ({ text, color, width, pessoa }: TextoProps) => {
  return (
    <>
      <Header>
        <div className="teste">32432</div>
      </Header>
      <Container width={width} color={color}>
        {text} - {pessoa?.valorAtual} - {pessoa.altura} - {pessoa.sobrenome} -{' '}
        {pessoa.peso}
      </Container>
    </>
  )
}

export { Texto }
