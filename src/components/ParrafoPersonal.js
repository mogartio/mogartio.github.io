import { wait } from "@testing-library/user-event/dist/utils";

export default function Main() {
    return(
    <div className="parrafoPersonalContainer"> 
          <div className="parrafoPersonal">
          <h4> Un poco sobre el procesamiento de datos... </h4>
          <p>
          Uno de los trabajos que más me gusto hacer fue el de Probabilidad y Estadística. <br></br> 
          Se puede encontrar el enunciado, la resolucion en python y el informe que escribí EN ESTE REPO, pero en sintesis: <br></br> 
            - Se parte de la hipotesis de que los celulares con mayor capacidad de almacenamiento suelen tener baterías más duraderas, ya que suelen ser mejores modelos.<br></br> 
            - Un archivo con valores registrados sobre almacenamiento y duración de baterías fue provisto. La idea era usar estos datos para estimar la duración de la batería en función de la capacidad de almacenamiento.<br></br> 
          </p>  

          </div>
        </div>);
}
