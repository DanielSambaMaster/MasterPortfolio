
import './App.css'
import { useState } from 'react';
import Consoler from './Consoler';
function App() {

  const [mode, setMode] = useState(false);

  return (
    <>
    <Consoler mode={mode} setMode={setMode} />
    </>
  )
}

export default App
