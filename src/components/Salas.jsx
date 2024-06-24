import React from "react";
import Salas from "./Salasconteudo";
import { listaSalas } from "../assets/dataSalas.js";
import video from "../assets/images/videoEvento (3).mp4";
const MontSalas = () => {
  const Sala = listaSalas.map((salaCont) => (
    <Salas
      key={salaCont.id}
      name={salaCont.name}
      url={salaCont.imageurl}
      price={salaCont.price}
      reward={salaCont.reward}
      desc={salaCont.desc}
      comp={salaCont.comp}
    />
  ));

  return (
    <div id="price">
      <h1>Procura Diversão?</h1>
      <h4>Escolha uma e venha fazer parte desta experiência</h4>
      {Sala}
      <div id="videoE">
        <video autoPlay loop muted width={500}>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
};

export default MontSalas;
