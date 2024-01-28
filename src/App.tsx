import { useRete } from 'rete-react-plugin';
import { createEditor } from './Editor';
import './App.css'
import './rete.css';

function App() {
  const [ref] = useRete(createEditor)

  return (
    <>
      <div>
      </div>
      <div ref={ref} className="rete"></div>
    </>
  )
}

export default App
