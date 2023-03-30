
import './landpage.css';
import Main from './main';
import Conteudo from './conteudo';
import Navbar from '../Navbar';

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <Main/>
      <Conteudo/>
    </div>
    </>
  );
}
