import { Link } from "react-router-dom"
import { BiVoicemail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import './footer.style.css';

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="info-container">
                <h5>Todos os Direitos reservados ©️Victor Siqueira</h5>
                <Link target="_blank" to="https://mail.google.com/mail/u/0/?hl=pt-BR&tf=cm&fs=1&to=joaovictorsal777@gmail.com"><BiVoicemail/></Link>
                <Link target="_blank" to="https://github.com/victorsz08"><FaGithub/></Link>
            </div>
            <div className="about-container">
                <h5>Sobre o Blog</h5>
                <p>Este Blog foi desenvolvido com intuito academico, mas também,
                    com intuito de ajudar homens com artigos sobre desenvolvimento
                    masculino.
                </p>
            </div>
        </footer>
    )
}