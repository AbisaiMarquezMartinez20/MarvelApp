import React from 'react'
// props.personaje o distructure props
const Personaje = ({ personaje }) => {
    return (
        <div className="row">
            <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} className="card-img-top" alt='hh' /> 
            <div className="card">
                <h2 className="card-text">{personaje.name}</h2>
                <p className="card-text"> Comics: {personaje.comics.available ===0 ? "No" : "Si"}</p>
                <p className="card-tex"> Series: {personaje.series.available ===0 ? "No" : "Si"}</p>
                <p className="card-text"> Eventos: {personaje.events.available ===0 ? "No" : "Si"}</p>
            </div>
        </div>
    )
}

export default Personaje;
