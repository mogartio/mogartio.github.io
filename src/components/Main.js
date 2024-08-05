import mogartio from '.././img/mogartio.jpeg'
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
  };
    const img = new Image();
    img.src = mogartio;
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
                <div className="wrapperPersonal">
                  <div className="hola"> Hola! </div>
                  <div > <img src={mogartio} className="fotoMia"/></ div>
                </div>
                <p className="parrafoPerso">Soy Martín, un estudiante de cuarto año de Ingeniería en Informática en la UBA que usa anteojos. <br></br> 
          <br></br> 
             Me interesa la ciencia de datos y disfruto principalmente haciendo desarrollo backend a bajo y alto nivel.<br></br> <br></br>
           Trivia sobre mi: mi lenguaje preferido es golang, uso nvim, soy hincha de racing, toco la guitarra, me gusta el ajedréz y todo el mundo siempre me dice cosas como "si estuviera buscando a un jr para mi empresa, definitivamente te contrataría a vos!"<br></br> <br></br> 
         Muchas gracias por visitar mi página, pueden encontrar mi cv, mi perfil de linkedin y mi cuenta de github arriba de todo.    </p></div>}
              </div>
            </div>
    );
}
