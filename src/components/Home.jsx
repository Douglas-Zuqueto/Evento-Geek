
import Contact from './Contact';
import Team from './Team';
import Salas from './Salas';
import Services from './Services';
import Slider from './Slider';
import About from './About';

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Salas />
            <Team />
            <Contact />
        </div>
    )
}
