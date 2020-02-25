import React, {useState} from 'react'

import Header from '../components/header'

function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header />
      <p>Clicked: {count}</p>
      <button onClick={e => handleClick(e)}>Click</button>
    </div>
  )
}

export default Counter
