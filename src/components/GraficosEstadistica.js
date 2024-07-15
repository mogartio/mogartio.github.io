import { useState } from 'react'
import '.././styles/styleGraficos.css'
import EstA from './../img/ejercicio2.png'
import EstB from './../img/ejercicio3.png'
import EstC from './../img/ejercicio4.png'
import EstD from './../img/ejercicio5.png'
import EstE from './../img/ejercicio6.png'
import EstF from './../img/ejercicio7.png'

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
        <h4> Los siguientes graficos son parte del INFORME del repo. </h4>
        <div className='GraficosSubContainer'>
          <button onClick={restarIndice} className='botonGrafico'> {'<-'} </button>
          <img src={arrayPaths[indice]} alt="Grafico Estadistica" className='Graficos'/>
          <button onClick={sumarIndice} className='botonGrafico'> {'->'}</button>
        </div>
    </div>
    );
}
