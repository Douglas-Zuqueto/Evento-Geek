import videoSlider from '../assets/images/Geek tech.mp4'
// slide página principal
export default function Slider() {
  return (
    <div id="slider">
      <div id="slidertext">
        <h3>Geek Tech está chegando!</h3>
        <br />
        <h1>Evento novo na área!!!</h1>
        <br />
        <p>
          Um novo evento para todos os Nerds e Otakus se divertirem! <br />
          Diferentes atrações para todos os gostos e a chance de conhecer
          Guilherme Briggs, grande dublador brasileiro.
        </p>
        <br />
      </div>

      <div id="slidervideo">
        <iframe
          width="560"
          height="315"
          src={videoSlider}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
