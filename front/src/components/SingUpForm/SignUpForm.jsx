import axios from "axios";
import { useState, useEffect } from "react";
import validation from "../../validation.js";

import {
  Wrapper,
  Form,
  Input,
  Button,
  GlobalStyle,
  InputsConteiner,
  StyledSpan,
} from "../../styled-components/LoginForm.js";

const SignUpForm = () => {
  const [singUpData, setSingUpData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    setErrors(validation(singUpData));
  }, [singUpData]);

  const signUp = (singUpData) => {
    const endpoint = "http://localhost:3001/rickandmorty/signup";
    axios
      .post(endpoint, singUpData)
      .then((response) => {
        const { create } = response.data;
        if (create === true) {
          window.alert("User created successfully");
          window.location.reload(true);
        }
      })
      .catch((error) => {
        return window.alert(error.response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (singUpData.password !== singUpData.confirm_password)
      return window.alert("Passwords do not match");
    signUp(singUpData);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setErrors(validation({ ...singUpData, [name]: value }));
    setSingUpData({ ...singUpData, [name]: value });
  };
  console.log(errors);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <InputsConteiner>
            <Input
              type="text"
              name="email"
              value={singUpData.email}
              onChange={handleChange}
              placeholder="User e-mail"
            />
            {errors.email ? <StyledSpan>{errors.email}</StyledSpan> : ""}
          </InputsConteiner>
          <InputsConteiner>
            <Input
              type="text"
              name="password"
              value={singUpData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password ? <StyledSpan>{errors.password}</StyledSpan> : ""}
          </InputsConteiner>
          <InputsConteiner>
            <Input
              type="text"
              name="confirm_password"
              value={singUpData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm password"
            />
            {errors.confirm_password ? (
              <StyledSpan>{errors.confirm_password}</StyledSpan>
            ) : (
              ""
            )}
          </InputsConteiner>

          {errors ? <Button type="submit">Submit</Button> : ""}

          
        </Form>
      </Wrapper>
    </>
  );
};

export default SignUpForm;
