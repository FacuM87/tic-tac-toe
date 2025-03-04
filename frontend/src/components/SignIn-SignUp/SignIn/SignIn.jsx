import React from 'react'
import "./SignIn.css"
import { useUserStore } from '../../../hooks/userStore.js';

const SignIn = () => {
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const serverResponse = await fetch("http://localhost:3000/api/auth/signIn",{
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(loginData)
      })
    
      const data = await serverResponse.json();
    
      console.log(data);
      await setUser(data)
      

    } catch (error) {
      console.error("Couldnt Login: "+error);
      ;
      
    }
  }

  return (
    <div className='signInModal'>
      <form className='signIn-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input id='email' type="email" name='email'autoComplete='on'/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input id='password' type="password" name='password'/>
        </div>
        <button >Send</button>
      </form>
    </div>
  )
}

export default SignIn