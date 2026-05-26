export default function Cadastro() {
  return (
    <div className="container">
      <h1>Cadastro de Cliente</h1>

      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button>Cadastrar</button>
      </form>
    </div>
  )
}