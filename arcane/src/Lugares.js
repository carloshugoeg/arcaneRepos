import React, { Component } from "react";

class Lugares extends Component {
  render() {
    return (
      <div>
        <h3>SPA App - Contact</h3>
        <p>Please feel free to contact us with any questions or inquiries you may have. We are always happy to help!</p>
        <h4>Contact Details:</h4>
        <ul>
        <li><strong>Email:</strong> info@example.com</li>
        <li><strong>Phone:</strong> 1-800-555-1234</li>
        <li><strong>Address:</strong> 123 Main St, Anytown USA</li>
        </ul>
        <link rel="stylesheet" href="lugares.css"></link>
        <div className="titulo">
              <h2>UNA CASA DIVIDIDA</h2>
              <p>
              Dos hermanas, dos ciudades y un descubrimiento que cambiará el mundo para siempre.
              En las ciudades de Piltover y Zaun, se palpa el desasosiego en el ambiente: inventores, ladrones, políticos y señores del crimen buscan liberarse de las ataduras de una sociedad fragmentada. Mientras la rebelión va cobrando fuerza, dos hermanas roban un artefacto de poder inimaginable. Los descubrimientos y el peligro son el trasfondo sobre el que nacerán héroes y se romperán vínculos. ¿Servirá este poder para cambiar el mundo o lo llevará a la ruina? Este es el mundo de Arcane.
              </p>
              </div>
        <div className="slider-box">
          <ul>
            <li>
              <img src="carrousel/piltover.jpg" alt=""></img>
              <div className ="texto">
              <h2>LA CIUDAD DEL PROGRESO</h2>
              <p>
              Piltover, situada en el centro del continente, está en la cúspide del progreso. La invención de la tecnología hextech promete un futuro glorioso, con dos científicos brillantes al frente. Sin embargo, este potencial tiene un precio y el fracaso podría resultar devastador, en un mundo en que políticos compiten por un poder que apenas alcanzan a comprender. Mientras el desasosiego se extiende por la ciudad subterránea y se cierne una revuelta, la gente de Piltover debe proteger su futuro... sin importar el precio.
              </p>
              </div>
            </li>
            <li>
            <img src="carrousel/zaun.jpg" alt=""></img>
            <div className="texto">
              <h2>LA CIUDAD SUBTERRÁNEA</h2>
              <p>
              A la sombra del progreso, y muy por debajo de las sofisticadas torres de Piltover, la ciudad subterránea aguarda. El aire de la ciudad es espeso y lo inundan los gritos y el humo. Los callejones prometen peligro, deseo... o ambas cosas. Sin embargo, el corazón de esta ciudad late con esperanza, ingenio y un espíritu inquebrantable con el que ni avariciosos barones químicos ni agresivos agentes podrán acabar. Ahora que se avecina la era del hextech, los habitantes de Zaun miran hacia arriba con determinación, soñando con algo mejor. 
              </p>
              </div>
            </li>
          </ul>
      </div>
      </div>
    );
  }
}

export default Lugares;