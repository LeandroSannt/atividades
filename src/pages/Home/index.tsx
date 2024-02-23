import { useState, useEffect } from 'react'
import { Texto } from '../../components/Texto'

import { Container } from './styles'

import api from '../../services/api'
import { Link } from 'react-router-dom'

interface ValorProps {
  valor: number
  nome?: string
  sobrenome?: string
  peso: number
  altura?: number
}

export interface DadosProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Home = () => {
  const [valorAtual, setValorAtual] = useState<ValorProps>({
    valor: 10,
    nome: 'leandro',
    peso: 80
  })

  const [dados, setDados] = useState<DadosProps[]>([])
  const [valorAlterado] = useState<number>(20)
  const [passei, setPassei] = useState(false)

  const multipliquePor2 = () => {
    setValorAtual({
      peso: valorAtual.peso * 3,
      valor: valorAtual.valor * 2
    })
  }

  // useEffect(() => {
  //   if (passei === true) {
  //     setValorAlterado(valorAlterado * 2)

  //     alert('ola mundo')
  //   }
  // }, [passei])

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    const fetchData = async () => {
      const response = await api.get('todos')

      if (response.data) {
        setDados(response.data)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Texto
        pessoa={{
          valorAtual: valorAtual.valor,
          altura: 1.73,
          nome: valorAtual.nome,
          peso: valorAtual.peso,
          sobrenome: 'santos'
        }}
        text={'texto 1'}
        color="green"
        width="500px"
      />
      <input type="text" onChange={input} />
      <button onClick={multipliquePor2}>Cliquei</button> <br />
      <button
        onClick={() => {
          setPassei(!passei)
        }}
      >
        Cliquei no passei
      </button>{' '}
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
