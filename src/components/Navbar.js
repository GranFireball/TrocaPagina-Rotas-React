import '../App.css';
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="pages">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/filmes">Filmes</Link>
                <Link className="link" to="/cep">CEP</Link>
            </div>
        </div>
    );
}
