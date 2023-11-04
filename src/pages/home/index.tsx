import { CardPost } from "../../components/CardPost"
import './home.css'

export const Home = () => {
    return (
        <main className="home-container">
            <h1>ULTIMAS POSTAGENS</h1>
            <div className="content-container">
                <section className="cards-container">
                    <CardPost title="Uma nova postagem" content="/assests/img.png" id="1"/>
                    <CardPost title="Uma nova postagem" content="/assests/img.png" id="2"/>
                    <CardPost title="Uma nova postagem" content="/assests/img.png" id="3"/>
                </section>
            </div>
        </main>
    )
}