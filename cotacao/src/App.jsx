import { useState } from 'react';
import {BsArrowDownUp} from 'react-icons/bs'

function App() {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  let real = 'Real'
  if (value > 1) {
    real = 'Reais'
  }

  function conversor() {
    alert('Convertido!')
  }

  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <h2>BRL - ?</h2>
      <h2>{value} {real} Brasileiro</h2>
      <div className="realBrasileiro">
        <input onChange={handleChange} type="text" value={value} placeholder="Real Brasileiro" />
      </div>
      <BsArrowDownUp onClick={conversor}/>
      <div className="coin">
        <input type="text" placeholder="$" value={value} />
        <select>
          <option value=""></option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  );
}

export default App;
