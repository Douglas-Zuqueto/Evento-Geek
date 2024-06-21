import Salas from './Salasconteudo';
import { listaSalas } from '../assets/dataSalas.js';


export default function montSalas() {

    const Sala = listaSalas.map((salaCont)=> <Salas key={salaCont.id} name={salaCont.name} url={salaCont.imageurl} price={salaCont.price} reward={salaCont.reward} desc={salaCont.desc}/>);

    return (
        <div id="price" >
            <h1>Procura Diversão?</h1>
            <h4>Escolha uma e venha fazer parte desta experiência</h4>
            {Sala}
           
        </div>
    )
}
