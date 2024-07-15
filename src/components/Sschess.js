import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import React from 'react';
import caballoBlanco from './../img/caballo_blanco.gif'
import torreBlanca from './../img/torre_blanco.gif'
import alfilBlanco from './../img/alfil_blanco.gif'
import caballoRojo from './../img/caballo_rojo.gif'
import torreRojo from './../img/torre_rojo.gif'
import alfilRojo from './../img/alfil_rojo.gif'
import '.././styles/gridStyle.css'
  
export default function Sschess() {
    const [level, setLevel] = useState(0);
    const string_level = "NIVEL: " + String(level - 1);
    const [printt, setPrintt] = useState();
    let   filaActual;
    let   colActual;
    const [contadorPiezas, setContador] = useState(level + 3);
    const [coordenadasInicialesNivel, setCoordenadasIniciales] = useState([]);
    const [coordenadaActual, setCoordenadaActual] = useState([]);
    const [coordenadasMarcadas, setCoordenadasMarcadas] = useState([[]]);
    const [estadoJuego, setEstadoJuego] = useState(false)
    const [piecesDictionary, setPiecesDictionary] = useState({
        'torre': [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0], [-8, 0], [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7], [0, -8]],
        'caballo': [[1, 2], [2, 1], [-1, 2], [-2, 1], [-1, -2], [-2, -1], [1, -2], [2, -1]],
        'alfil': [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7], [-8, 8], [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7], [-8, -8], [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7], [8, -8]],
      });

    
    const inicializarMatrizz = () =>{
      const nuevaMatrizz = [];
      for (let i = 0; i < 8; i++) {
        const fila = new Array(8).fill(""); 
        nuevaMatrizz.push(fila);
      }
      return nuevaMatrizz;
    }
    const inicializarMatriz = () =>{
      const nuevaMatriz = [];
      for (let i = 0; i < 8; i++) {
        const fila = new Array(8).fill(""); 
        nuevaMatriz.push(fila);
      }
      return nuevaMatriz;
    }
    const [estadoInicial, setEstadoInicial] = useState(inicializarMatrizz);
    const [tablero, setTablero] = useState(inicializarMatriz);


    const esCoordenadaValida = (fila, col) => {
      return (fila>=0 && fila  < 8 && col >=0 && col < 8)
    }

    const obtenerCoordenadasPosibles = (col, fila) => {
      let nuevasCoordenadasMarcadas = [];
      let piezaActual = tablero[fila][col];
      for (let i=0; i < piecesDictionary[piezaActual].length; i++) {
        let colInspeccionada = col + piecesDictionary[piezaActual][i][1];
        let filaInspeccionada = fila + piecesDictionary[piezaActual][i][0];

        if (esCoordenadaValida(filaInspeccionada, colInspeccionada) && tablero[filaInspeccionada][colInspeccionada] != "") {
          nuevasCoordenadasMarcadas.push([filaInspeccionada,colInspeccionada]);
        }
      }
      setCoordenadasMarcadas([...nuevasCoordenadasMarcadas]);
    }

    
    function inicializarJuego(nivelActual){
        setLevel(nivelActual + 1)
        setContador(nivelActual + 3);
        setEstadoJuego(true);
        setCoordenadasMarcadas([]);
        let colInicial = Math.floor(Math.random() * 8);
        let filInicial = Math.floor(Math.random() * 8);
        let coordenadaInicial = [filInicial, colInicial];
        guardarCoordenadaInicial([...coordenadaInicial]);
        const keysArray = Object.keys(piecesDictionary);
        let randomIndex = Math.floor(Math.random() * keysArray.length);
        let piezaInicial = keysArray[randomIndex];
        filaActual = filInicial;
        colActual = colInicial;
        let nuevoTablero = [...estadoInicial];
        nuevoTablero[filInicial][colInicial] = piezaInicial;
        tablero[filInicial][colInicial] = piezaInicial;
        setEstadoInicial(nuevoTablero);
        for (let i=0; i< nivelActual + 3; i++){
            [piezaInicial, filInicial, colInicial] = generarNuevaPieza(piezaInicial, filInicial, colInicial);
            tablero[filInicial][colInicial] = piezaInicial;
        }
        setCoordenadaActual([filaActual, colActual]);
        coordenadaActual[0] = filaActual;
        coordenadaActual[1] = colActual;
        setCoordenadasMarcadas([]);
        obtenerCoordenadasPosibles(colActual, filaActual);
    }
    const guardarCoordenadaInicial = (coordenadaInicial) => {
      setCoordenadasIniciales(coordenadaInicial);
    }

    const generarNuevaPieza = (piezaInicial, filInicial, colInicial) => {
        while (true) {
            let direccion = piecesDictionary[piezaInicial][Math.floor(Math.random() *piecesDictionary[piezaInicial].length)];
            let filaNueva =  filInicial + direccion[0];
            let colNueva = colInicial + direccion[1];
            if (filaNueva < 0 || colNueva < 0 || filaNueva > 7 || colNueva > 7 || estadoInicial[filaNueva][colNueva] != "") {
                continue
            }
            let keysArray = Object.keys(piecesDictionary);
            let randomIndex = Math.floor(Math.random() * keysArray.length);
            let piezaNueva = keysArray[randomIndex];
            let nuevoTablero = [...estadoInicial];
            nuevoTablero[filaNueva][colNueva] = piezaNueva;
            setEstadoInicial(nuevoTablero);
            return [piezaNueva, filaNueva, colNueva];
        }
    }

    const coordenadaAMarcar = (fila, col) => {
      for (let i=0; i < coordenadasMarcadas.length; i++){
        if (coordenadasMarcadas[i][0] == fila && coordenadasMarcadas[i][1] == col){
          return true
        }
      }
      return false
    }
    const hacerMovimiento = (fila, col) => {
      if(coordenadaAMarcar(fila, col)) {
        let nuevoTablero = [...tablero];
        nuevoTablero[coordenadaActual[0]][coordenadaActual[1]] = "";
        setTablero(nuevoTablero);
       setContador(contadorPiezas - 1);
        setPrintt(contadorPiezas)
        if (contadorPiezas == 1) {
          setLevel(level + 1);
          setEstadoJuego(false);
          for(let i=0; i<8; i++) {
            for (let j=0; j<8; j++) {
              tablero[i][j] = "";
              estadoInicial[i][j] = "";
            }
          }
          setCoordenadaActual([]);
          inicializarJuego(level);
          return
        }
        setCoordenadaActual([fila, col]);
        setCoordenadasMarcadas([]);

        obtenerCoordenadasPosibles(col, fila);
      }
    }
    const reiniciarNivel = () => {
      setCoordenadaActual([...coordenadasInicialesNivel]);
      for(let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
          tablero[i][j] = estadoInicial[i][j];
        }
      }
      setContador(level + 2); 
      obtenerCoordenadasPosibles(coordenadasInicialesNivel[1], coordenadasInicialesNivel[0])
      return     
    }
    return (
        <div className='SschessContainer'>
          <div className='tituloSSchess'> 
                <p> Shape Shifter Chess!</p>
          </div>             
          <div className='gameInfoContainer'>
            <div className='nivelActual'>
              {string_level}
            </div>
            <div className='buttonContainer'>
                  {estadoJuego ? (
                    <button onClick={reiniciarNivel} >Reiniciar Nivel</button>
                    
                  ) : (
                    <button onClick={inicializarJuego(1)} >Empezar juego</button>
                  )}
            </div>
          </div> 
          <div className='gridContainer'>
            <div className="grid">  
              {tablero.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                  {row.map((cell, cellIndex) => (
                    <div
                    style = {
                      (coordenadaAMarcar(rowIndex, cellIndex)) ? {
                        width: '100%',
                        display: 'flex',
                        height: '100%',
                        borderColor: 'rgb(255, 30, 88)',
                        borderWidth: '3px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: '0%',
                        maxHeight: '100%',
                        boxSizing: 'border-box',
                        objectFit: 'contain',
                      } : {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        borderColor: '#white',
                        borderWidth: '3px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: '0%',
                        maxHeight: '100%',
                        boxSizing: 'border-box',
                        objectFit: 'contain',

                      }
                    }
                    onClick={() => hacerMovimiento(rowIndex, cellIndex)}
                    key={cellIndex} className="cell">
                        {cell === "torre" && (rowIndex == coordenadaActual[0] && cellIndex == coordenadaActual[1]) && <img src={torreRojo} alt="torreR" />}
                        {cell === "torre" && !(rowIndex == coordenadaActual[0] && cellIndex == coordenadaActual[1]) && <img src={torreBlanca} alt="torreB" />}
                        {cell === "alfil" && (rowIndex == coordenadaActual[0] && cellIndex == coordenadaActual[1]) && <img src={alfilRojo} alt="alfilR" />}
                        {cell === "alfil" && !(rowIndex == coordenadaActual[0] && cellIndex == coordenadaActual[1]) && <img src={alfilBlanco} alt="alfilB" />} 
                        {cell === "caballo" && (rowIndex == coordenadaActual[0] && cellIndex == coordenadaActual[1]) && <img src={caballoRojo} alt="caballoR" />}
                        {cell === "caballo" && !(rowIndex == coordenadaActual[0] && cellIndex == coordenadaActual[1]) && <img src={caballoBlanco} alt="caballoB"  />}               
                    </div>
                  ))}
                </div>
              ))}
            </div>
        </div>
        
      </div>
    );
};
