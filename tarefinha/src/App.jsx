import './App.css'

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Minha Tarefinha</h1>

        <p>
          Clique no botão para ver o efeito visual!
        </p>

        <button className="efeito-botao">
          Clique aqui
          <span className="brilho"></span>
        </button>
      </div>
    </div>
  )
}

export default App