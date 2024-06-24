import invited from "../assets/midia/convid.png";
import dub1 from "../assets/midia/mewtwo.png";
import dub2 from "../assets/midia/optimus.jpg";
import dub3 from "../assets/midia/cosmo.png";
import dub4 from "../assets/midia/brook.jpg";
import dub5 from "../assets/midia/reijulian.jpg";
import dub6 from "../assets/midia/sman.webp";
import dub7 from "../assets/midia/freakazoid.jpg";

export default function Guest() {
  return (
    <div id="guest">
      <h1 id="guesttitle">Convidado Especial</h1>
      <div id="guestgrid">
        <div id="guestimgcontainer">
          <img src={invited} id="guestimg" />
          <h1>Guilherme Briggs</h1>
        </div>
        <div id="guesttext">
          <p>
            {" "}
            Guilherme Neves Briggs, nascido em 25 de julho de 1970, no Rio de
            Janeiro. É ator, dublador, diretor de dublagem, locutor, tradutor,
            desenhista, youtuber e blogueiro brasileiro. <br />
            Alguns dos seus trabalhos mais conhecidos são: Freakazoid em
            Freakazoid!, Mewtwo de Pokémon, Buzz Lightyear em Toy Story, Toy
            Story 2, Toy Story 3 e Toy Story 4, Cosmo em Os Padrinhos Mágicos,
            Hawk Moth em Miraculous: As Aventuras de Ladybug & Cat Noir e em
            Miraculous: As Aventuras de Ladybug - O Filme, Thranduil na trilogia
            "O Hobbit", Optimus Prime na quintologia Transformers, Superman em
            Liga da Justiça, Samurai Jack em Samurai Jack e Mickey Mouse (2009 a
            diante) em A Casa do Mickey Mouse (substituindo o dublador Sérgio
            Moreno), Curtas do Mickey Mouse, Rei Julien em Madagascar,
            Madagascar 2: A Grande Escapada, Os Pinguins de Madagascar,
            Madagascar 3 - Os Procurados e Saúdem Todos o Rei Julien. <br />
            Os principais atores que Briggs dubla são: Denzel Washington,
            Brendan Fraser, Owen Wilson, Zachary Quinto, David Schwimmer, Dwayne
            Johnson, Seth Rogen e Julian McMahon. <br />
            <br />
            Guilherme Briggs é reconhecido por profissionais da dublagem e da
            dramaturgia como um dos melhores dubladores do Brasil. A respeito de
            Briggs, Orlando Drummond considerava que "Sabe-se pouco do muito que
            ele faz e é capaz de fazer por dominar bem o inglês e saber brincar
            com a língua para poder criar no uso da voz". <br />
            Em 2013, Alexandre Moreno disse que "[...] Guilherme é a referência
            da área na nova geração, pois não matou a criança que tem em si."
            <div className="br"></div>
            Atores dirigidos em dublagens por Briggs, como Leandro Hassum, que
            dublou em Meu Malvado Favorito, elogiou a capacidade de Briggs de
            dar informalidade às falas, e Rodrigo Santoro, que dublou em Rio,
            reconhece sua versatilidade. <br />
            <br />
            Alguns dos seus trabalhos mais conhecidos:
          </p>
          <br />
          <div id="cardsguest">
            <div className="cardGuest">
              <div className="col no-gutters">
                <div className="row">
                  <img src={dub1} alt="pic" className="card-imgGuest" />
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="card-titleGuest">Mewtwo</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardGuest">
              <div className="col no-gutters">
                <div className="row">
                  <img src={dub2} alt="pic" className="card-imgGuest" />
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="card-titleGuest">Optimus Prime</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardGuest">
              <div className="col no-gutters">
                <div className="row">
                  <img src={dub3} alt="pic" className="card-imgGuest" />
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="card-titleGuest">Cosmo</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardGuest">
              <div className="col no-gutters">
                <div className="row">
                  <img src={dub4} alt="pic" className="card-imgGuest" />
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="card-titleGuest">Brook</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardGuest">
              <div className="col no-gutters">
                <div className="row">
                  <img src={dub5} alt="pic" className="card-imgGuest" />
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="card-titleGuest">Rei Julian</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardGuest">
              <div className="col no-gutters">
                <div className="row">
                  <img src={dub6} alt="pic" className="card-imgGuest" />
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="card-titleGuest">Superman</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardGuest">
              <div className="col no-gutters">
                <div className="row">
                  <img src={dub7} alt="pic" className="card-imgGuest" />
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="card-titleGuest">Freakazoid</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
