'use client'

import React, {useState} from 'react'
import styles from './inputs.module.css'

const Inputs = () => {
  const [personajePrincipal, setPersonajePrincipal] = useState("");
  const [trama, setTrama] = useState("");
  const [ambiente, setAmbiente] = useState("");
  const [valores, setValores] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = {
      personajePrincipal,
      trama,
      ambiente,
      valores,
    };
    fetch("https://api.openai.com/v1/engines/text-davinci-002/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <API_KEY>",
      },
      body: JSON.stringify({
        prompt: `Crea un cuento para niños con el personaje principal ${personajePrincipal}, en un ambiente ${ambiente}, con una trama ${trama} y enseñando los valores ${valores}`,
        max_tokens: 1000,
        temperature: 0.5,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputs}>
      <label>
        Personaje Principal:
        <input
          type="text"
          value={personajePrincipal}
          onChange={(event) => setPersonajePrincipal(event.target.value)}
        />
      </label>
      <br />
      <label>
        Trama:
        <input
          type="text"
          value={trama}
          onChange={(event) => setTrama(event.target.value)}
        />
      </label>
      <br />
      <label>
        Ambiente:
        <input
          type="text"
          value={ambiente}
          onChange={(event) => setAmbiente(event.target.value)}
        />
      </label>
      <br />
      <label>
        Valores:
        <input
          type="text"
          value={valores}
          onChange={(event) => setValores(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Generar Cuento</button>
    </form>
  )
}

export default Inputs