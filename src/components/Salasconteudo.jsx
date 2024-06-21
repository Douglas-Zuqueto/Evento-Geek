import one from '../assets/images/suco1.png';


export default function SalaText(props) {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col">
                    <img src={props.url} alt="pic" className="card-img" />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <button className="btn btn-rooms">
                        <p className="card-text">Saiba mais</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
