import { useState } from 'react';
import {BsArrowDownUp} from 'react-icons/bs'

function App() {
  const [value, setValue] = useState('')
  const [converted, setConverted] = useState('')
  const [selectedCoin, setSelectedCoin] = useState('USD')
  
  function handleChange(e) {
    let value = e.target.value
    let expressionReg = value.replace(/\D/g, '')
    setValue(expressionReg)
  }
  
  function selectedHandleChange(e) {
    setSelectedCoin(e.target.value)
  }
  
  let real = 'Real'
  if (value > 1) {
    real = 'Reais'
  }

    const url = 'https://economia.awesomeapi.com.br/last/'
    const coin = selectedCoin + '-BRL'
    const selected = selectedCoin + 'BRL'

    fetch(url + coin)
    .then(response=> {
      return response.json()
    })
    .then(data=> {
      let coinSelect = data[selected].ask
      
      setConverted(value / coinSelect)
    })
    .catch(erro => {
      console.log(erro);
    })

  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <h2>BRL - {selectedCoin}</h2>
      <h2>{value} {real} Brasileiro</h2>
      <div className="realBrasileiro">
        <input onChange={handleChange} type="text" value={value} placeholder="Real Brasileiro" />
      </div>
      <BsArrowDownUp/>
      <div className="coin">
        <input type="text" value={converted.toLocaleString('pt-BR', { style: 'currency', currency: selectedCoin })} disabled = {value.length === 0} placeholder={converted.toLocaleString('pt-BR', { style: 'currency', currency: selectedCoin })}/>
        <select onChange={selectedHandleChange}>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="USD" defaultValue='' selected>USD</option>
        </select>
      </div>
    </div>
  );
}

export default App;
