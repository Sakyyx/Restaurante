export default function Reservas() {
  return (
    <div className="container">
      <h1>Reservas</h1>

      <form>
        <input type="text" placeholder="Nome" />
        <input type="date" />
        <input type="time" />
        <button>Reservar</button>
      </form>
    </div>
  )
}