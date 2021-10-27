import React, { useState } from "react";
import url from "./Consumir";
import "./style.css"



export default function App() {

  const [cep, setCep] = useState([])
  const [uf, setUf] = useState([])
  const [logra, setLogra] = useState([])
  const [bairro, setBairro] = useState([])
  const [dd, setDd] = useState([])
  const [city, setCity] = useState([])

  function consultCep() {
    url.get(`${cep}/json/`)
      .then(data => {
        if (!data.data.erro) {
          setUf(data.data.uf);
          setLogra(data.data.logradouro);
          setBairro(data.data.bairro);
          setDd(data.data.ddd);
          setCity(data.data.localidade);
        } else {
          setUf("Invalido");
          setLogra("Invalido");
          setBairro("Invalido");
          setDd("Invalido");
          setCity("Invalido");
        }
      }).catch((e) => {
        setUf("Invalido");
        setLogra("Invalido");
        setBairro("Invalido");
        setDd("Invalido");
        setCity("Invalido");
      });
  }


  return (
    <div className="main">
      <h1>CONSULTAR CEP</h1>
      <input type="text" maxLength="8" placeholder="EX: 00000000" onChange={(e) => {
        e.preventDefault()
        setCep(e.target.value)
      }}></input>
      <button onClick={() => consultCep()}>Pesquisar</button>

      <h2>Resultados para: {cep}</h2>
      <p>{city} - {uf}</p>

      <div className="infos">
        <div className="infoL">
          <p>logradouro: {logra} </p>
          <p>CEP: {cep}</p>
          <p>Bairro: {bairro}</p>
        </div>
        <div className="infoR">
          <p>Cidade: {city}</p>
          <p>UF: {uf}</p>
          <p>DDD: {dd}</p>
        </div>
      </div>
    </div>
  );
}