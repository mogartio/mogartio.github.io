import '.././styles/styleMain.css'

export default function Main() {
    return(
        <div className='mainContainer'>
           <div className='parrafoInstruccionesContainer'>
                <div className='parrafoInstrucciones'>
                  <h4> Como se juega </h4>
                  <p> El juego consta de una pieza roja solo se puede mover a casillas ocupadas por otras piezas siguiendo las reglas convencionales del ajedrez.
            Cuando come una pieza se transforma en ella. <br></br>El objetivo es comer todas las piezas del tablero.<br></br> Nota: Se puede saltar por encima de otras piezas como lo suele hacer el caballo 
                  </p>
                </div>
              </div> <div className='parrafoContainer'>
                <div className='parrafoSSchess'>
                    <h4>Un poco sobre el proyecto...</h4>
                    <p> Este es un juego que desarrollé en Python para una de las primeras materias que curse en la facultad. Me propuse rehacerlo en Javascript para lograr un mayor entendimiento de dicho lenguaje.<br></br>
            Es un proyecto que me gustó mucho revisitar ya que soy un aficionado del ajedrez (pueden ver mi cuenta en <a href="https://lichess.org/@/BadDaysXd" target="_blank">LICHESS</a>) y, al a analizar mi propio código para rehacerlo, logré cuantificar cuanto crecí como desarrollador en el transcurso de estos años.
                    </p> 
                </div>
            </div>
        </div>
    );
}
