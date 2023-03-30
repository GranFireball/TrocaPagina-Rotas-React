
import './filmes.css';
import Filmes from './filmes';
import Navbar from '../Navbar';

export default function FilmesPage(){
    return (
        <>
         <Navbar/>
        <div>  
            <Filmes/>
        </div>
        </>
    );
}

