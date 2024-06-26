import fb from "../assets/midia/fb.png";
import twi from "../assets/midia/twi5.png";
import ins from "../assets/midia/ins1.jpg";
import lin from "../assets/midia/lin5.png";

export default function Footer() {
  const estilo = {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    borderRadius: "50%",
    marginLeft: "10px",
  };

  return (
    <div id="footer" className="myfooter">
      <div className="cardfooter">
        <br />
        <div className="card-body">
          <h3 className="card-title">Sobre Nós</h3>
          <p className="text">
            Somos o mais novo evento que chegará para animar Cataguases e
            região! Como amantes da cultura Geek queremos disponibilizar mais
            oportunidades para que outros fãs possam aproveitar mais desse mundo
            incrível.
          </p>
          <img src={fb} alt="social media" style={estilo} />
          <img src={twi} alt="social media" style={estilo} />
          <img src={ins} alt="social media" style={estilo} />
          <img src={lin} alt="social media" style={estilo} />
        </div>
      </div>

      <div className="cardfooter">
        <br />
        <div className="card-body">
          <h3 className="card-title">Data do Evento</h3>
          <p className="text">
            Próximo Evento: 25 de Dezembro de 2024, 12:00 BRT
          </p>
          <p>Para mais informações, entre em contato conosco</p>
        </div>
      </div>

      <div className="cardfooter">
        <br />
        <div className="card-body">
          <h3 className="card-title">Contato</h3>
          <p className="text">
            Endereço: Rua dos Animes, 13 - Centro - Cataguases/Mg
          </p>
          <p className="text">Tel: (32)4324-7810</p>
          <p className="text">Email: geektech@gmail.com</p>
        </div>
      </div>
      <div>
        <br />
        <br />
        <p id="rights">
          Todos os direitos reservados | Geek Tech | Junho - 2024
        </p>
        <p id="disclaimer">*Este site é exclusivo para fins educacionais.</p>
      </div>
    </div>
  );
}
