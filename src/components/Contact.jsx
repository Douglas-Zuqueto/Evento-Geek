import img1 from '../assets/images/nickyIcon.jpg'
import img2 from '../assets/images/viviIcon.jpg'
import img3 from '../assets/images/luanaIcon.jpg'
import img4 from '../assets/images/kauaIcon.png'
import img5 from '../assets/images/Douglas.png'

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
                    <a href='' target="_blank"><img src={img1} className='equipeFoto1'/></a>
                    <a href='https://www.linkedin.com/in/viviane-santos-a6a69127b' target="_blank"><img src={img2} className='equipeFoto2'/></a>
                    <a href='https://www.linkedin.com/in/luana-silva-de-sousa-2186992a2/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeBbcq9GqTI%2Bin69mtEAYJA%3D%3D' target="_blank"><img src={img3} className='equipeFoto3'/></a>
                    <a href='https://www.linkedin.com/in/kau%C3%A3-souza-400758101/' target="_blank"><img src={img4} className='equipeFoto4'/></a>
                    <a href='' target="_blank"><img src={img5} className='equipeFoto5'/></a>
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
