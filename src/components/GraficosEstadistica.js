import { useState } from 'react'
import '.././styles/styleGraficos.css'
import EstA from './../img/ejercicio2.png'
import EstB from './../img/ejercicio3.png'
import EstC from './../img/ejercicio4.png'
import EstD from './../img/ejercicio5.png'
import EstE from './../img/ejercicio6.png'
import EstF from './../img/ejercicio7.png'
import flecha from './../img/arrow.png'

export default function Header() {
    const arrayPaths = [EstA, EstB, EstC, EstD, EstE, EstF];
    const [indice, setIndice] = useState(0);
    function sumarIndice() {
      setIndice(indice => (indice + 1) % arrayPaths.length);
  }

    function restarIndice() {
      setIndice(indice => (indice - 1 + arrayPaths.length) % arrayPaths.length);
  }
    return (
    <div className='GraficosContainer'>
        <h5> Los siguientes graficos son una demostración superflua del trabajo realizado. Para más información consultar el informe en el repo. </h5>
        <div className='GraficosSubContainer'>
        <button className="boton"> <img src={flecha} className='botonGraficoIzquierda'alt="Flecha Izq"onClick={sumarIndice}/> </button>
          <img src={arrayPaths[indice]} alt="Grafico Estadistica" className='Graficos'/>
          <button className="boton"> <img src={flecha} className='botonGrafico'lt="Flecha Izq"onClick={sumarIndice}/> </button>
        </div>
    </div>
    );
}
