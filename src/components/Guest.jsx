import invited from '../assets/images/Guilherme_Briggs.jpg'
import dub1 from '../assets/images/mewtwo.jpg'
import dub2 from '../assets/images/optimusprime.jpg'
import dub3 from '../assets/images/cosmo.png'
import dub4 from '../assets/images/brook.jpg'

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
                    <p>Grande dublador brasileiro cujo histórico de trabalhos é incrível. Alguns exemplos são:</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
