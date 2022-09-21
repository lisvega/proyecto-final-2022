import React from 'react'
import "./SelectPdi.css"

const SelectPdi = ({ pdi, handleExperience }) => {
  return (
    <div className='container-selec-pdi'>
      <div className='barra-search'>
        <h4>Selecciona los PDIS Asociados </h4>
        <input type="text" name='' placeholder='Buscar por nombre o ciudad' />
      </div>
      {pdi.map((pdi) => (
        <div className='select-pdi-input' key={pdi._id}>
          <div>
            <p>Nombre: {pdi.name}</p>
            <p>Ciudad: {pdi.location}</p>
            <p>Precio: {pdi.price}</p>
          </div>
          <input type="checkbox" name="pdi" id={pdi._id} value={pdi._id} onChange={handleExperience} />
        </div>
      ))}

    </div>
  )
}

export default SelectPdi