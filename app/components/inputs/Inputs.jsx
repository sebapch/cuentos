'use client'

import React, {useState} from 'react'
import styles from './Inputs.module.css'

const Inputs = () => {
  const [personajePrincipal, setPersonajePrincipal] = useState("");
  const [trama, setTrama] = useState("");
  const [ambiente, setAmbiente] = useState("");
  const [valores, setValores] = useState("");
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const test = 'hola'

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    const inputData = {
      personajePrincipal,
      trama,
      ambiente,
      valores,
    };
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Escribeme un cuento en el que ${personajePrincipal}, con una trama acerca de ${trama}, un problema que se resuelve y enseñando ${valores}.`,
        max_tokens: 1000,
        temperature: 0.5,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setResult(data.choices[0].text);
        setLoading(false)
      });
  };

  return (
    <>
        <form onSubmit={handleSubmit} className={styles.inputs}>
      <label>
        Personajes:
        </label>
        <input
          type="text"
          value={personajePrincipal}
          onChange={(event) => setPersonajePrincipal(event.target.value)}
        />
      <label>
        Que pasa en la historia?:
        </label>
        <input
          type="text"
          value={trama}
          onChange={(event) => setTrama(event.target.value)}
        />

      <label>
        Enseñanza:
        </label>
        <input
          type="text"
          value={valores}
          onChange={(event) => setValores(event.target.value)}
        />
     
      <button type="submit">{!loading ? "Generar Cuento" : "Cargando"}</button>
    </form>
    <div className={styles.resultadoContainer}>
      <p className={styles.resultado}>
      {result}
      </p>
    </div>
    </>

  )
}

export default Inputs