import { useState } from "react";

import SignUpForm from "../SingUpForm/SignUpForm.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import { Button } from "../../styled-components/LoginForm.js";
import { StyledFormConteiner, PrimaryConteiner, Logo } from "../../styled-components/FormConteiner.js";

const Form = () => {
  const [singUp, setSingUp] = useState(false);

  const handleLogin = () => {
    setSingUp(!singUp);
  };

  return (
    <PrimaryConteiner>
      <Logo />
      {!singUp ? (
        <StyledFormConteiner>
          <Button onClick={handleLogin}>Sign In</Button>
          <LoginForm />
        </StyledFormConteiner>
      ) : (
        <StyledFormConteiner>
          <Button onClick={handleLogin}>Sign Up</Button>
          <SignUpForm />
        </StyledFormConteiner>
      )}
    </PrimaryConteiner>
  );
};

export default Form;
