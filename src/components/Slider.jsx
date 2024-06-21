import logo from '../assets/images/logo.png'
// slide página principal
export default function Slider() {
    return (
        <div id="slider">
            <div>
                <img src={logo} id="sliderlogo"></img>
            </div>
            <div id="slidertext">
                <h3>Novo evento na área!!!</h3>
                <br />
                <h1>Geek Tech</h1><br />
                <p>Um novo evento para todos os Nerds e Otakus se divertirem! 
                    Diferentes atrações para todos os gostos e a chance de conhecer Fulano de Tal, 
                    grande dublador brasileiro. porta 51</p><br />
                
            </div>
            
        </div>
    )
}
