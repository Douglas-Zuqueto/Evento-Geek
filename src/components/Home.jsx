import Contact from "./Contact";
import Rules from "./Rules";
import Salas from "./Salas";
import Guest from "./Guest";
import Slider from "./Slider";
import About from "./About";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Guest />
      <Salas />
      <Rules />
      <Contact />
    </div>
  );
}
