import { useState } from 'react'
import axios from 'axios'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function cadastrar(e) {
    e.preventDefault()

    try {
      const resposta = await axios.post(
        'https://restaurante-ku4f.onrender.com/clientes',
        {
          nome,
          email,
          senha
        }
      )

      console.log(resposta.data)

      alert('Cliente cadastrado com sucesso!')

      setNome('')
      setEmail('')
      setSenha('')

    } catch (error) {
      console.log(error)

      alert('Erro ao cadastrar')
    }
  }

  return (
    <div className="container">
      <h1>Cadastro Novo</h1>

      <form onSubmit={cadastrar}>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
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