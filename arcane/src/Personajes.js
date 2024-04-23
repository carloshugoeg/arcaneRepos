import React, { Component } from "react";

class Personajes extends Component {
  render() {
    return (
      <div>
        <h3>SPA App - About</h3>
        <p>This is a paragraph on the About of the SPA App.</p>
        <p>The Team of SPA App.</p>
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Personality</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Jinx</td>
            <td>Ejemplo 2</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Sevika</td>
            <td>Ejemplo 2</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Silco</td>
            <td>Ejemplo 3</td>
            </tr>
            <ol>
            <p></p>
            <p>Ejemplo de otra lista</p>
            <li>Jinx</li>
            <li>Vi</li>
            <li>Viktor</li>
            <li>Silco</li>
            <li>Sevika</li>
            <li>Caitlyn</li>
            </ol>
            <img src="https://i.pinimg.com/originals/9e/b5/4d/9eb54d835ba25c1880b7edce114620ef.jpg" width={500} height={500} ></img>
        </tbody>
        </table>
      </div>
    );
  }
}

export default Personajes;