import { ValorAtualProvider } from './hooks/useValorAtual'
import { AppRoutes } from './routes'

function App() {
  return (
    <ValorAtualProvider>
      <AppRoutes />
    </ValorAtualProvider>
  )
}

export default App
