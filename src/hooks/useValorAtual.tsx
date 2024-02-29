import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import api from '../services/api'

interface AuthContextState {
  global: string
  global2: string
  valorAtual: ValorProps
  setValorAtual: Dispatch<SetStateAction<ValorProps>>
  cliquei: () => void
  multipliquePor2: () => void
  dados: DadosProps[]
}

interface ValorProps {
  valor: number
  nome?: string
  sobrenome?: string
  peso: number
  altura?: number
}

interface Props {
  children: JSX.Element | JSX.Element
}
export interface DadosProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

const ValorAtualProvider = ({ children }: Props) => {
  const global = '2151'
  const global2 = 'Eu estou em todos os lugares 2'
  const [dados, setDados] = useState<DadosProps[]>([])

  const [valorAtual, setValorAtual] = useState<ValorProps>({
    valor: 100,
    nome: 'leandro',
    peso: 80
  })

  const cliquei = () => {
    alert('cliquei em algum lugar')
  }

  const multipliquePor2 = () => {
    setValorAtual({
      peso: valorAtual.peso * 2,
      valor: valorAtual.valor * 2
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('todos')

      if (response.data) {
        setDados(response.data)
      }
    }

    fetchData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        global,
        global2,
        valorAtual,
        setValorAtual,
        cliquei,
        multipliquePor2,
        dados
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useValorAtual(): AuthContextState {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('insira o valorAtualprovider ao redor do seu elemento')
  }
  return context
}

export { ValorAtualProvider, useValorAtual }
