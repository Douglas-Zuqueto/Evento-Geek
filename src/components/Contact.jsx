import img1 from '../assets/images/nick.png'
import img2 from '../assets/images/vivi.png'
import img3 from '../assets/images/luana.png'
import img4 from '../assets/images/kauaIcon.png'
import img5 from '../assets/images/Douglas.png'

import animelogo1 from '../assets/images/animeuaiLogo.webp'
import animelogo2 from '../assets/images/gif.png'
import animelogo3 from '../assets/images/panini.png'
import animelogo4 from '../assets/images/nintendo.png'
import animelogo5 from '../assets/images/netflix.png'
import animelogo6 from '../assets/images/cacau.png'
import animelogo7 from '../assets/images/nu.png'
import animelogo8 from '../assets/images/pocky.png'
import animelogo9 from '../assets/images/hot.png'
import animelogo10 from '../assets/images/play.png'


import './Contact.css'

export default function Contact() {
    return (
        <div id="contact">
            <form>
                <div className="contactUs">
                    <h1>Equipe Produtora</h1><br />
                    <div className='cardEquipe'>
                    <a href='https://www.linkedin.com/in/nycholas-ferreira-de-freitas-rocha-3b302325b/' target="_blank"><img src={img1} className='equipeFoto1'/></a>
                    <a href='https://www.linkedin.com/in/viviane-santos-a6a69127b' target="_blank"><img src={img2} className='equipeFoto2'/></a>
                    <a href='https://www.linkedin.com/in/luana-silva-de-sousa-2186992a2/' target="_blank"><img src={img3} className='equipeFoto3'/></a>
                    <a href='https://www.linkedin.com/in/kau%C3%A3-souza-400758101/' target="_blank"><img src={img4} className='equipeFoto4'/></a>
                    <a href='https://www.linkedin.com/in/douglas-bulho-zuqueto-103529293/' target="_blank"><img src={img5} className='equipeFoto5'/></a>
                    </div>
                    <div className='tagName'>
                    <p>Nicky</p>
                    <p>Vivi</p>
                    <p>Luana</p>
                    <p>Kauã</p>
                    <p>Douglas</p>
                    </div>
                    <h1>Patrocinadores</h1><br />
                    <div className='cardLogo'>
                    <img src={animelogo1} className='logoimg'/>
                    <img src={animelogo2} className='logoimg'/>
                    <img src={animelogo3} className='logoimg'/>
                    <img src={animelogo4} className='logoimg'/>
                    <img src={animelogo5} className='logoimg'/>
                    <img src={animelogo6} className='logoimg'/>
                    <img src={animelogo7} className='logoimg'/>
                    <img src={animelogo8} className='logoimg'/>
                    <img src={animelogo9} className='logoimg'/>
                    <img src={animelogo10} className='logoimg'/>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
