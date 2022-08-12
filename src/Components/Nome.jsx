import React from "react";
import { useState } from "react";

export default function Nome(props){

    function trocarNome(){
        alert('Trocar')
    }



    return(
        <>
            <h2>Olá: B22</h2>
            <button onClick={trocarNome}>Trocar nome</button>

        </>
    ) 
}