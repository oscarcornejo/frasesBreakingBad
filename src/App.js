import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Frase from './componentes/Frase';

function App() {

  const [frase, setFrase] = useState({});

  const consultarApi = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //Agregar la respuesta de la Api al state
    setFrase(resultado.data[0]);
  }

  // CONSULTA A UNA API REST
  useEffect(
    () => {
      consultarApi();
    }, []
  )

  return (
    <div className="contenedor">
        <Frase frase={frase} />

        <button onClick={consultarApi}>Generar una Frase</button>
    </div>
  );
}

export default App;
