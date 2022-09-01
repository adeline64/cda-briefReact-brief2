import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Vous avez un résultat de {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici pour augmenter
      </button>
      <button onClick={() => {
        if (count >= 1) {
          setCount(count - 1);
        }
      }}>
      Cliquez ici pour retirer
      </button>
      <button onClick={() => setCount(0)}>
        Cliquez ici pour remettre à 0
      </button>
    </div>
  );
}

export default App
