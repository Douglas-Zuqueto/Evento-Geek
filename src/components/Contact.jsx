import img1 from '../assets/images/nickyIcon.jpg'
import img2 from '../assets/images/viviIcon.jpg'
import img3 from '../assets/images/luanaIcon.jpg'
import img4 from '../assets/images/kauaIcon.jpg'
import img5 from '../assets/images/avatar douglas.png'

import animelogo1 from '../assets/images/animeuaiLogo.webp'
import animelogo2 from '../assets/images/gifLogo.jpg'
import animelogo3 from '../assets/images/paniniLogo.png'
import animelogo4 from '../assets/images/nintendoLogo.png'
import animelogo5 from '../assets/images/netflixLogo.png'
import animelogo6 from '../assets/images/cacauLogo.jpg'
import animelogo7 from '../assets/images/nubankLogo.png'
import animelogo8 from '../assets/images/pockyLogo.png'
import animelogo9 from '../assets/images/topicLogo.png'
import animelogo10 from '../assets/images/playLogo.png'


import './Contact.css'

export default function Contact() {
    return (
        <div id="contact">
            <form>
                <div className="contactUs">
                    <h1>Equipe Produtora</h1><br />
                    <div className='cardEquipe'>
                    <img src={img1} id='equipeFoto3'/>
                    <img src={img2} id='equipeFoto1'/>
                    <img src={img3} className='equipeFoto'/>
                    <img src={img4} id='equipeFoto2'/>
                    <img src={img5} className='equipeFoto'/>
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
