
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/Notfound';
import CepPage from './components/cep.js/App';
import FilmesPage from './components/filmes.js/App';
import Home from './components/landpage.js/App';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="filmes" element={<FilmesPage/>}/>
            <Route path="cep" element={<CepPage/>}/>      
            <Route path="*" element={<NotFound/>}/>            
          </Route>
        </Routes>
    </div>
  );
}

export default App;
