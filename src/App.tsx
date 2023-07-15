import { useState } from 'react'
import Box from '@components/box'
import { box } from '@assets/constants'

function App() {
  const [value, setValue] = useState<number>()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value)
    setValue(newValue)
  }

  return (
    <div>
      <h1>Orion & Patricinha</h1>
      <div>
        <h2>Quanto sobrou na conta?</h2>
        <input type="number" name="value" onChange={handleInputChange} />
      </div>
      {box.map((itens, index) => {
        return (
          <div key={index}>
            <Box name={itens.name} percent={itens.percent} value={value} />
          </div>
        )
      })}
    </div>
  )
}

export default App
