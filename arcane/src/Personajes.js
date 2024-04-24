import React, { Component } from "react";

class Personajes extends Component {
  render() {
    const myDiv = document.querySelector('div');
    myDiv.style.color = 'purple'
      return (
        <div>
          <h3>Personajes Principales</h3>
          <p>La tensión entre dos ciudades vecinas está más candente que nunca debido a la amenaza que representan las nuevas invenciones. En Piltover, la tecnología hextech democratiza la magia; en Zaun, un narcótico transforma a humanos en monstruos: en ese contexto, Arcane confiere vida a algunos de los campeones más icónicos de League of Legends..</p>
          <p>--------</p>
          <table>
          <thead>
               <th></th>
                       <tr>
    <th>PERSONAJE</th>
              <th>NOMBRE</th>
              </tr>
          </thead>
          <tbody>
              <td>1</td>
              <th>Vi (Hailee Steinfeld) </th>
              <td>Una luchadora con el pelo rosa que tuvo una infancia difícil pero sigue teniendo muy buen corazón. Eso sí, sus métodos son un tanto atrevidos. En Arcane, repasaremos el pasado de Vi y veremos cómo pasa de ser una mezquina criminal de Zaun a protectora de la paz en Piltover.</td>
             
              <tr>
              <td>2</td>
              <th>Jinx (Ella Purnell) </th>
              <td>La hermana de Vi es un tanto complicada. Con una mente a otro nivel y una insensatez implacable, la inteligencia y el pasado traumático de Jinx la convierten en una villana estupenda.</td>
              </tr>

              <tr>
              <td>3</td>
              <th>Jayce (Kevin Alejandro) </th>
              <td>Conocido como el Defensor del mañana de Piltover, Jayce es un inventor que se ha convertido en un líder político. Fue una pieza fundamental en la invención de la tecnología hextech, una forma científica de dominar la energía arcana.</td>
              </tr>

              <tr>
              <td>4</td>
              <th>Caitlyn Kiramman (Katie Leung)</th>
              <td>Caitlyn es tenaz y decidida, además de la oveja negra de su familia, e intenta constantemente huir de los tentáculos de su influencia. Adora a su familia, pero reniega del privilegio de nacer en un hogar adinerado, ya que considera la riqueza una prisión.</td>
              </tr>

              <tr>
              <td>5</td>
              <th>Mel Medarda (Toks Olagundoye) </th>
              <td> Mel, la hija de una de las familias más famosas de Runaterra, fue una paria desde pequeña. En Piltover, ha encontrado su lugar como líder de la ciudad y con ese éxito ha llamado la atención de su familia, para bien o para mal.</td>
              </tr>

              <tr>
              <td>6</td>
              <th>Viktor (Harry Lloyd) </th>
              <td>Nacido en Zaun, la gran mente de Viktor lo ayudó a llegar hasta Piltover. Se convirtió en el compañero de Jayce durante el desarrollo de la hextech, pero la enfermedad de Viktor le lleva a explorar los límites de lo que puede hacer esta nueva tecnología.</td>
              </tr>

              <tr>
              <td>7</td>
              <th>Vander (JB Blanc) </th>
              <td>Aunque es poderoso en la ciudad subterránea, Vander se centra en mantener a salvo a los ciudadanos de Zaun de los agentes de Piltover, que a menudo actúan con mano dura.</td>
              </tr>

              <tr>
              <td>8</td>
              <th>Silco (Jason Spisak)</th>
              <td> Zaun es la visión creativa de Silco. El padrino de la ciudad subterránea tuvo que sobrepasar los límites para hacer realidad su ciudad de ensueño. Su tutelaje convirtió a Jinx en la máquina de destrucción que es ahora mismo.</td>
              </tr>
          </tbody>
          </table>
        </div>
      );
  
  }
  }
  export default Personajes;