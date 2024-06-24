import videoSlider from '../assets/images/Geek tech.mp4'
// slide página principal
export default function Slider() {
    return (
        <div id="slider">

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
