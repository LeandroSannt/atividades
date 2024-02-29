import { useState } from 'react'

import { Container } from './styles'

import { Link } from 'react-router-dom'
import { useValorAtual } from '../../hooks/useValorAtual'

export interface DadosProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Home = () => {
  const { global, valorAtual, multipliquePor2, cliquei, dados } =
    useValorAtual()

  const [valorAlterado] = useState<number>(20)
  const [passei, setPassei] = useState(false)

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  return (
    <Container>
      {global}
      {valorAtual.valor}
      <br />
      <input type="text" onChange={input} />
      <button onClick={multipliquePor2}>multiplique</button> <br />
      <button
        onClick={() => {
          setPassei(!passei)
        }}
      >
        Cliquei no passei
      </button>{' '}
      <button onClick={cliquei}>Cliquei</button>
      <br />
      valor alterado - {valorAlterado}
      <br />
      {passei && <h3>passei</h3>}
      <br />
      {dados.map(dado => {
        return (
          <>
            {dado.id} - {dado.title} -{' '}
            <button>
              <Link to={`detalhes/${dado.id}`}>ver dado</Link>
            </button>
            <br />
          </>
        )
      })}
    </Container>
  )
}
export { Home }
