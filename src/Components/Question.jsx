import React from "react";
import './Question.css'
import perguntas from '../data/perguntas'

export default props => {
    console.log(perguntas)

    const lista = perguntas.map((perguntas) => {
        return (
            <li key={perguntas.id}>
                {perguntas.pergunta}
                <hr></hr>
            </li>
        );
    });



    return(
        <div>{lista}</div>
    )
}