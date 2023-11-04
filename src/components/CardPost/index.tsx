import { Link } from "react-router-dom";
import { IPost } from "../../interfaces"
import './card.style.css';


export const CardPost = ({id, title, content} : IPost) => {
    return (
        <Link to={`/postagens/${id}`}><div className="card-container" key={id}>
            <img src={content} alt={title}/>
            <div className="titulo-container">
                <h1>Título da postagem</h1>
                <p>Saiba mais...</p>
            </div>
        </div>
        </Link>
    )
}