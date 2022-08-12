import './App.css';
import Scheduler from './Scheduler';
import { useCallback, useState } from 'react';

function App() {

  const [key, setKey] = useState(0);

  const incrementKey = useCallback(() => {
    setKey((currentKey) => {
      return currentKey+10;
    })
  }, [setKey]);

  return (
    <div className="App">
    <button onClick={incrementKey}>SETKEY</button>
      <Scheduler key={key}/>
    </div>
  );
}

export default App;
