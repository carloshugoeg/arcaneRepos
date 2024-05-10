import React, { Component } from "react";
import './lugares.css';
class Lugares extends Component {
  scrollToSlide = (slideId) => {
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }
  render() {
    return (
      <div>
        <section class ="container">
          <div class="titulo">
            <h2>UNA CASA DIVIDIDA...</h2>
            <p>
              Dos hermanas, dos ciudades y un descubrimiento que cambiará el mundo para siempre.
              En las ciudades de Piltover y Zaun, se palpa el desasosiego en el ambiente: inventores, ladrones, políticos y señores del crimen buscan liberarse de las ataduras de una sociedad fragmentada. Mientras la rebelión va cobrando fuerza, dos hermanas roban un artefacto de poder inimaginable. Los descubrimientos y el peligro son el trasfondo sobre el que nacerán héroes y se romperán vínculos. ¿Servirá este poder para cambiar el mundo o lo llevará a la ruina? Este es el mundo de Arcane.
              <br></br>
              <br></br>
              </p>
          </div>
          <div class="slider-wrapper">
            <div class="slider">
              <img id="slide1" src="https://64.media.tumblr.com/a7b2a4980749515bea8b2a27fa8241da/6e597a84379a61a2-18/s540x810/a9fd5c012b09eb1a1f887f9744df72e0c80ce8d4.gifv" alt="3d rendering of an imaginary city"></img>      
              <img id="slide2" src="https://dotesports.com/fr/wp-content/uploads/sites/8/2021/11/03091425/world_of_riotx_arcane_key_art.png?w=1200" alt="3d rendering of an imaginary city"></img>
              <img id="slide3" src="https://steamuserimages-a.akamaihd.net/ugc/1809879238907537039/BB45E890E59E9D1E88E7547451CB7325ED7FB980/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="3d rendering of an imaginary city"></img>       
              <img id="slide4" src="https://64.media.tumblr.com/c34c727bf4c4998d70848bdde21fd705/361502f77028306b-43/s540x810/95a6be86fee41aba925780df34c5a83611ec4c90.gifv" alt="3d rendering of an imaginary city"></img>
              <img id="slide5" src="https://preview.redd.it/t74n7c2sify71.png?width=2484&format=png&auto=webp&s=741affb84730926e1550c123609c899e15fa7003" alt="3d rendering of an imaginary city"></img>
              <img id="slide6" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/54dc1d132299533.61dee8597f291.gif" alt="3d rendering of an imaginary city"></img>
            </div>
            <div class="slider-nav">
            <button onClick={() => this.scrollToSlide('slide1')}></button>
            <button onClick={() => this.scrollToSlide('slide2')}></button>
            <button onClick={() => this.scrollToSlide('slide3')}></button>
            <button onClick={() => this.scrollToSlide('slide4')}></button>
            <button onClick={() => this.scrollToSlide('slide5')}></button>
            <button onClick={() => this.scrollToSlide('slide6')}></button>
            </div>
          </div>
          <br></br>
          <div class="piltover">
            <h2>PILTOVER</h2>
            <p>Piltover, situada en el centro del continente, está en la cúspide del progreso. La invención de la tecnología hextech promete un futuro glorioso, con dos científicos brillantes al frente. Sin embargo, este potencial tiene un precio y el fracaso podría resultar devastador, en un mundo en que políticos compiten por un poder que apenas alcanzan a comprender. Mientras el desasosiego se extiende por la ciudad subterránea y se cierne una revuelta, la gente de Piltover debe proteger su futuro... sin importar el precio.
            </p>
            <img src="https://external-preview.redd.it/no-spoilers-arcane-jinx-over-piltover-video-wallpaper-v0-0QTNN13CqLy61gDgw-38fJwItxRhGDJR0QPNwL5cFhw.jpg?auto=webp&s=0b96e034c794c5658e3d6ad4a937f4f8b1aac549" alt="imagen de piltover"></img>
            </div>
            <div class="zaun">
            <h2>ZAUN</h2>
            <p>A la sombra del progreso, y muy por debajo de las sofisticadas torres de Piltover, la ciudad subterránea aguarda. El aire de la ciudad es espeso y lo inundan los gritos y el humo. Los callejones prometen peligro, deseo... o ambas cosas. Sin embargo, el corazón de esta ciudad late con esperanza, ingenio y un espíritu inquebrantable con el que ni avariciosos barones químicos ni agresivos agentes podrán acabar. Ahora que se avecina la era del hextech, los habitantes de Zaun miran hacia arriba con determinación, soñando con algo mejor. 
            </p>
            <img src="https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/blt2222367ad00cdafb/6183475dc9714c667b4fe9b5/OverZaun_536x391.jpg" alt="imagen de zaun"></img>
            </div>
        </section>
      </div>
    );
    
  }
}

export default Lugares;