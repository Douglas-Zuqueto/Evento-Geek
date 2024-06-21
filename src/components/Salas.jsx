import Salas from './Salasconteudo';
import { listaSalas } from '../assets/dataSalas.js';


export default function montSalas() {

    const Sala = listaSalas.map((salacont)=> <Salas key={salacont.id} name={salacont.name} url={salacont.imageurl} price={salacont.price}/>);

    return (
        <div id="price" >
            <h1>Bem Vindo</h1>
            <h4>Escolha uma e venha fazer parte desta experiência</h4>
            {Sala}
           
        </div>
    )
}
