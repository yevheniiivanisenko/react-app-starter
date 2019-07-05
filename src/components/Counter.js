import React, {useState} from 'react';

import Layout from './Layout';

function Counter() {
  const [counter, setCount] = useState(0);

  function handleClick() {
    setCount(counter + 1);
  }

  return (
    <Layout>
      <p>Clicked: {counter}</p>
      <button onClick={(e) => handleClick(e)}>Click</button>
    </Layout>
  );
}

export default Counter;
