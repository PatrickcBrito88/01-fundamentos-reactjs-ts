import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

ReactDOM.createRoot(document.getElementById('root')!).render(

    // O TypeScript pode identificar como que uma variável pode não existir, como é o caso do root acima.
    // Ao adicionarmos o !, estamos dizendo que essa variável existe e que o TypeScript pode ignorar esse erro.

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
