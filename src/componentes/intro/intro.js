import React from "react";
import "./intro.css"
import icon from './icon.png';
import CustomButton from "../button/customButton";

function Intro({titulo}){
    return(
        <div className="contenedorImagen">
            <img src={icon} className="icon" alt="foto perfil"/>
            <h2> {titulo} </h2>
            <CustomButton color="red" texto="Botón rojo"></CustomButton>
            <CustomButton color="blue" texto="Botón azul"></CustomButton>
            <CustomButton color="green" texto="Botón verde"></CustomButton>
        </div>
    )

}

export default Intro;