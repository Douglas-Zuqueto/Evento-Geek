import protas from '../assets/images/protagonistas.jpg'

export default function About() {
    return (
        <div id="about">
            <div >
                <img src={protas} id="aboutImg"/>
            </div>
            <div id="aboutText">
                <h4 id="aboutHeading">Querem conhecer mais sobre nós?</h4>
                <br />
                <p>Somos o mais novo evento que chegará para animar Cataguases e região! 
                    Como amantes da cultura Geek queremos disponibilizar mais oportunidades para que outros 
                    fãs possam aproveitar mais esses tipos de eventos, pois na região existem poucos.</p>
                <br />
                <p>Decidimos então criar pelo menos mais um evento para tirar aquele gostinho de quero mais que 
                    muitos fãs ficam, nós inclusos, quando temos que esperar o espaço entre um evento e o próximo.</p>
                <br />
                <p>Contamos com o apoio de grandes parceiros para poder tornar este evento possível e trazer um 
                    espaço abrangindo o máximo possível de eventos para que todos possam curtir, 
                    independente de qual parte da cultura Geek o atraia. Claro que sempre criando 
                    oportunidades de ganhar gosto por novas atividades e novas amizades.</p>

            </div>
        </div>
    )
}
