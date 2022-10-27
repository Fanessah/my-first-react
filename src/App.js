import { useState}from 'react'

import './App.css';

const names= ['Gustavo','Gerly','Cassandra','Emily','Adi','Cari','Eddie','Tyler','Todd']

function App() { 
  const [myName, setMyName] = useState('Fanessa')
  const [counter, setCounter] =useState(0)

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
   {myName} is pretty damn cool 
        </p>
        {names.map(name => (
          <button key={name} onClick={() => setMyName(name)}>{name}</button>
        ))}
        <button onClick={() => setMyName('Susie')}>Susie</button>
        <button onClick={() => setMyName('Samantha')}>Samantha</button>
        <button onClick={() => setMyName('Michael')}>Michael</button>
        <p>You clicked the button {counter} times</p>
        <button onClick={() => setCounter(counter -1)}>-1</button>
        <button onClick={() => setCounter(0)}>reset</button>
        <button onClick={() => setCounter(counter +1)}>+1</button>
        
      </header>
    </div>
  );
}

export default App;
