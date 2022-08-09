import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const onClickButton = () => {
       navigate('/game');
    } 
    return (
        <section className="hero is-medium is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                <Button onClick={onClickButton} text="MetCamp Quiz" classes='is-primary is-outlined is-large'/>
                </div>
            </div>
        </section>
    )
}

export default Home;