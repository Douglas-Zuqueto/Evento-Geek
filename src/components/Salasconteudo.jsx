import { useState, useEffect } from "react";
import Swal from "sweetalert2";
export default function SalaText(props) {
  const [modal, setModal] = useState(false);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const emailInput = event.target.querySelector('input[type="email"]');
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email address!",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Once submitted, you will not be able to change your details!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Successfully Subscribed!",
          "Enjoy Your Subscription",
          "success"
        );
        toggleModal();
      }
    });
  };

  return (
    <div className="card">
      <div className="col no-gutters">
        <div className="row">
          <img src={props.url} alt="pic" className="card-img" />
        </div>
        <div className="row">
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <button className="btn btn-signup hide" onClick={toggleModal}>
              Saiba mais
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2 className="h1-1">GEEK TECH</h2>
            <p className="p-l-1">Cultura Geek</p>

            <div className="modal-text">
              <div>
                {props.price == 0 ? (
                  <h2>Venha se divertir!</h2>
                ) : (
                  <h2>Participe do Torneio</h2>
                )}
              </div>

              <div>{props.desc}</div>

              <div>
                {props.price == 0 ? (
                  <p>
                    <br />
                    (Apenas o custo de entrada do evento).
                  </p>
                ) : (
                  <p>
                    <br />A assinatura custa R${props.price}, assine e batalhe
                    por R${props.reward} contra seus oponentes com sede de
                    sangue.
                  </p>
                )}
              </div>

              <div>
                <p>Quer participar? Nos envie seu e-mail.</p>
              </div>

              <form onSubmit={handleFormSubmit}>
                <input
                  className="inp"
                  type="email"
                  required
                  placeholder="Seu Email"
                />

                <span>
                  <p>
                    <input id="same" type="checkbox" required className="in" />
                    <label htmlFor="same">
                      Eu declaro que sou maior de 18 anos e estou ciente das
                      minhas responsabilidades financeiras. Comprometo-me a
                      gastar o dinheiro com sabedoria, controlar minhas despesas
                      e buscar um equilíbrio financeiro saudável. Entendo que a
                      disciplina e a organização nas questões financeiras são
                      essenciais para garantir um futuro melhor.
                    </label>
                  </p>
                </span>
                <button className="btn-pr" type="submit">
                  Enviar
                </button>
              </form>
              <button className="close-modal" onClick={toggleModal}>
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
