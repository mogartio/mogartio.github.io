import '.././styles/styleMain.css'
import link from '.././img/external-link.png'
import { useRef, useState } from 'react';

export default function Main() {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)
    function timeout(delay) {
      return new Promise( res => setTimeout(res, delay) );
    }
    let cambiarVisibilidad = () => {
      setVisible(true)
      scroll()
    };
    async function scroll(){
      await timeout(1)
      window.scrollTo(0, document.body.scrollHeight)
  }
    return(
      <div ref={ref}>
        <div className='mainContainer'>
           <div className='parrafoInstruccionesContainer'>
                <div className='parrafoInstrucciones'>
                  <p>Los puzzles se generan aleatoriamente y está garantizado que tienen solución. <br></br>
                     Cada vez que se genera un nuevo nivel con una pieza más que el anterior. <br></br>
                     A partir del nivel 10 ya no se agregan más piezas.
                     <br></br><br></br>
        <button className="botonInvisible" onClick={cambiarVisibilidad}> Mas sobre Mi <img src={link} className='botonVisibilidad'alt="LINK"/> </button>
          </p>
                </div>
              </div> 
      {visible && 
              <div className="ContainerVisible" >
                <div className="hola"> Hola! </div>
                <p> Soy Martín, un estudiante de tercer año de Ingeniería en Informática en la UBA que usa anteojos. <br></br> 
          <br></br> 
            - Se parte de la hipotesis de que los celulares con mayor capacidad de almacenamiento suelen tener baterías más duraderas, ya que suelen ser mejores modelos.<br></br> 
            - Un archivo con valores registrados sobre almacenamiento y duración de baterías fue provisto. La idea era usar estos datos para estimar la duración de la batería en función de la capacidad de almacenamiento.<br></br> 
             </p></div>}
              </div>
            </div>
    );
}
