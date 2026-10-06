
import { useState } from 'react'
import './App.css'

function App() {
  const [cliques, setCliques] = useState(0)

  function ativarEfeito() {
    setCliques((anterior) => anterior + 1)
  }

  return (
    <main className="app">
      <div className="card">
        <div className="icone">✦</div>

        <h1>Minha Tarefinha</h1>

        <p>
          Prepare-se para uma experiência diferente.
        </p>

        <button
          className={`efeito-botao ${cliques > 0 ? 'ativado' : ''}`}
          onClick={ativarEfeito}
        >
          <span className="texto-botao">
            {cliques > 0 ? 'Energia ativada!' : 'Clique aqui'}
          </span>

          <span className="brilho" />

          {cliques > 0 && (
            <span
              key={cliques}
              className="explosao"
              aria-hidden="true"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <span
                  key={i}
                  className="particula"
                  style={{ '--i': i }}
                />
              ))}
            </span>
          )}
        </button>

        <p className="mensagem" key={cliques}>
          {cliques > 0
            ? `✨ Você ativou a energia ${cliques} ${cliques === 1 ? 'vez' : 'vezes'}!`
            : 'Passe o mouse e clique para descobrir o efeito.'}
        </p>
      </div>
    </main>
  )
}

export default App