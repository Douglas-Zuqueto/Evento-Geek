import img1 from "../assets/midia/nick.png";
import img2 from "../assets/midia/vivi.png";
import img3 from "../assets/midia/luana.png";
import img4 from "../assets/midia/kaua.png";
import img5 from "../assets/midia/Douglas.png";

import animelogo1 from "../assets/midia/animeuaiLogo.webp";
import animelogo2 from "../assets/midia/gif.png";
import animelogo3 from "../assets/midia/panini.png";
import animelogo4 from "../assets/midia/nintendo.png";
import animelogo5 from "../assets/midia/netflix.png";
import animelogo6 from "../assets/midia/cacau.png";
import animelogo7 from "../assets/midia/nu.png";
import animelogo8 from "../assets/midia/pocky.png";
import animelogo9 from "../assets/midia/hot.png";
import animelogo10 from "../assets/midia/play.png";

import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <form>
        <div className="contactUs">
          <h1>Equipe Produtora</h1>
          <br />
          <div className="cardEquipe">
            <div className="cardTeam">
              <div className="col no-gutters">
                <div className="row">
                  <a
                    href="https://www.linkedin.com/in/nycholas-ferreira-de-freitas-rocha-3b302325b/"
                    target="_blank"
                  >
                    <img src={img1} className="equipeFoto1" />
                  </a>
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="tagName">Nicky</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardTeam">
              <div className="col no-gutters">
                <div className="row">
                  <a
                    href="https://www.linkedin.com/in/viviane-santos-a6a69127b"
                    target="_blank"
                  >
                    <img src={img2} className="equipeFoto2" />
                  </a>
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="tagName">Vivi</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardTeam">
              <div className="col no-gutters">
                <div className="row">
                  <a
                    href="https://www.linkedin.com/in/luana-silva-de-sousa-2186992a2/"
                    target="_blank"
                  >
                    <img src={img3} className="equipeFoto3" />
                  </a>
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="tagName">Luana</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardTeam">
              <div className="col no-gutters">
                <div className="row">
                  <a
                    href="https://www.linkedin.com/in/kau%C3%A3-souza-400758101/"
                    target="_blank"
                  >
                    <img src={img4} className="equipeFoto4" />
                  </a>
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="tagName">Kauã</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardTeam">
              <div className="col no-gutters">
                <div className="row">
                  <a
                    href="https://www.linkedin.com/in/douglas-bulho-zuqueto-103529293/"
                    target="_blank"
                  >
                    <img src={img5} className="equipeFoto5" />
                  </a>
                </div>
                <div className="row">
                  <div className="card-body">
                    <h2 className="tagName">Douglas</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <h1>Patrocinadores</h1>
          <br />
          <div className="cardLogo">
            <img src={animelogo1} className="logoimg" />
            <img src={animelogo2} className="logoimg" />
            <img src={animelogo3} className="logoimg" />
            <img src={animelogo4} className="logoimg" />
            <img src={animelogo5} className="logoimg" />
            <img src={animelogo6} className="logoimg" />
            <img src={animelogo7} className="logoimg" />
            <img src={animelogo8} className="logoimg" />
            <img src={animelogo9} className="logoimg" />
            <img src={animelogo10} className="logoimg" />
          </div>
        </div>
      </form>
    </div>
  );
}
