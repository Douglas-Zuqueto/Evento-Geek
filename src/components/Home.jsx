
import Contact from './Contact';
import Team from './Team';
import Salas from './Salas';
import Guest from './Guest';
import Slider from './Slider';
import About from './About';

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Guest />
            <Salas />
            <Team />
            <Contact />
        </div>
    )
}
