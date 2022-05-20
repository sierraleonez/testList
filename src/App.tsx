import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [items, setItems] = useState<Array<string>>([])
  const [inputVal, setInputVal] = useState<string>('')

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(event.target.value)
  }

  function onClick() {
    let cp = [...items]
    cp.push(inputVal)
    setItems(cp)
    setInputVal('')
  }

  function sendToApi() {
    setTimeout(() => {
      window.alert('sent to api!')
    }, 400)
    console.log('data sent to backend: ', items)
    setItems([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={onChange} value={inputVal}/>
        {items.map((item, idx) => <p key={idx}>{item}</p>)}
        <button onClick={onClick}>click</button>
        <button onClick={sendToApi}>send to api</button>
      </header>
    </div>
  )
}

export default App
