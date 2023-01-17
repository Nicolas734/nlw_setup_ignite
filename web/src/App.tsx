import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {

  return (
    <div>
      <Habit completed={1} />
    </div>
  )
}

export default App

// Componente: Reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamental