import { useEffect, useState } from 'react'
import { DadosProps } from '../Home'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

const Detalhes = () => {
  const [dado, setDado] = useState<DadosProps>()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`todos/${id}`)

      if (response.data) {
        setDado(response.data)
      }
    }

    fetchData()
  }, [id])

  return (
    <>
      {dado?.id} - {dado?.title}
    </>
  )
}
export { Detalhes }
