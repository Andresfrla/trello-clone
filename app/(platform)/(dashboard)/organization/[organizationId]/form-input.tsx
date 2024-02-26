import React from 'react'

const FormInput = () => {
  return (
    <div>
    <input 
              id="title"
              name="title"
              required
              placeholder="Enter a Board Title"
              className="border-black border p-1"
            />
            </div>
  )
}

export default FormInput