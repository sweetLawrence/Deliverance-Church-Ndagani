import React from 'react'

const Input = ({name,id,type,onInputChange,value}) => {
    const handleChange = (e) => {
        onInputChange(e.target.id, e.target.value);
      };
  return (
    <div className='input'>
        <label htmlFor={id}>{name}</label>
        <input type={type} id={id} className='input-details' value={value} onChange={handleChange}/>
    </div>
  )
}

export default Input