import React from 'react'
import "./SignUp.css"

const SignUp = () => {
  return (
    <div>
      <form action="submit">
        <div>
          <label htmlFor="">Email</label>
          <input type="text" /> 
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" /> 
        </div>
        <button>Enviar</button>
      </form>  
    </div>
  )
}

export default SignUp