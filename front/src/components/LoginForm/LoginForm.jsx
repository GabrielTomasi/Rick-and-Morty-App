import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../validation";
import axios from "axios";
import {
  Wrapper,
  Form,
  Input,
  Button,
  GlobalStyle,
  InputsConteiner,
  StyledSpan
} from "../../styled-components/LoginForm.js";

const LoginForm = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [accessUser, setAccessUser] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setErrors(validation(userData));
  }, [userData]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const login = async (userData) => {
    try {
      console.log(userData)
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login";
      const response = await axios(URL + `?email=${email}&password=${password}`);
      const data = response.data;
      const { access } = data;
      console.log(access)
      setAccessUser(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error)
      window.alert(error.response.data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <div>
            <InputsConteiner>
              {/* <label>User Mail:</label> */}
              <Input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="User e-mail"
              />
            {errors.email ? <StyledSpan>{errors.email}</StyledSpan> : ""}
            </InputsConteiner>
          </div>
          <div>
            <InputsConteiner>
              {/* <label>Password</label> */}
              <Input
                type="text"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            {errors.password ? <StyledSpan>{errors.password}</StyledSpan> : ""}
            </InputsConteiner>
          </div>

            <Button type="submit">Submit</Button>
 
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginForm;
