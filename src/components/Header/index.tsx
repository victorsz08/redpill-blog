import { CgPill } from "react-icons/cg";
import { Link } from "react-router-dom";
import './header.style.css';

export const Header = () => {
    return (
        <header className="header-container">
            <Link to="/" ><div className="icon-container">
                <CgPill/>
                <h1>RedPillBlog</h1>
            </div></Link>
            <div className="options-container">
                <Link to="/">Home</Link>
                <Link to="/postagens/moda">Moda Masculina</Link>
                <Link to="/postagens/desenvolvimento">Desenvolvimento</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
        </header>
    );
};