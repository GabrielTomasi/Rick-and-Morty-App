import { useState } from "react";

import SignUpForm from "../SingUpForm/SignUpForm.jsx"
import LogginForm from "../LoginForm/LoginForm.jsx";

const Form = ({ login }) => {
  const [singUp, setSingUp] = useState(false)
  
const handleLogin = ()=>{
  setSingUp(!singUp)
}

  return !singUp ? (<div>
      <button onClick={handleLogin}>Sign Up</button>
      <LogginForm login={login} />
    </div>) : (<div>
      <button onClick={handleLogin}>Sign In</button>
      <SignUpForm />
    </div>)
  }

export default Form;
