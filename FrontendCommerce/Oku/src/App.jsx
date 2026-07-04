
import './App.css'
import Consoler from './assets/Consoler';
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState(false);

  return (
    <>
    <Consoler mode={mode} setMode={setMode} />
    </>
  )
}

export default App
