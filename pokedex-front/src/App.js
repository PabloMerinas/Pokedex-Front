import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pokedex } from './components/Pokedex/Pokedex';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </Router>
  )

}

export default App;
