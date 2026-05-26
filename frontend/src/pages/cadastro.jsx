import { useState } from 'react'
import axios from 'axios'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function cadastrar(e) {
    e.preventDefault()

    try {
      await axios.post(
        'https://restauranteakps.onrender.com/clientes',
        {
          nome,
          email,
          senha
        }
      )

      alert('Cliente cadastrado!')

      setNome('')
      setEmail('')
      setSenha('')
    } catch (error) {
      alert('Erro ao cadastrar')
      console.log(error)
    }
  }

  return (
    <div className="container">
      <h1>Cadastro</h1>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  )
}