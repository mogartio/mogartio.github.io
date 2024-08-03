import '.././styles/header.css'

export default function Header() {
    return (
        
        <div className='headerContainer'>
            <h1>Shape-shifter chess</h1>
                  <p> El juego consta de una pieza roja que solo se puede mover a casillas ocupadas por otras piezas siguiendo las reglas convencionales del ajedrez. <br></br>
                  
            Cuando come una pieza se transforma en ella. <br></br>El objetivo es comer todas las piezas del tablero.<br></br> Nota: Se puede saltar por encima de otras piezas como lo suele hacer el caballo 
                  </p>
                </div>
    );
}
