import { useState, useEffect } from "react";
import validation from "../../validation";


const Form = ({ login }) => {
  const [renderForm, setRenderForm] = useState(true)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setErrors (validation(userData));
  }, [userData]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };
const handleLogin = ()=>{
  setRenderForm(!renderForm)
}
const handleSingUp = (event) =>{
  event.preventDefault()
}
  const handleSubmit = (event) => {
    event.preventDefault();
    if(renderForm) login(userData);
  };
  return renderForm ? (<div>
      <button onClick={handleLogin}>Sign Up</button>
      <form onSubmit={handleSubmit}>
        <label>User Mail:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email ? <span>{errors.email}</span> : ''}
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password ? <span>{errors.password}</span> : ''}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>) : (<div>
      <button onClick={handleLogin}>Sign In</button>
      <form onSubmit={handleSingUp}>
      <label>User Mail:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email ? <span>{errors.email}</span> : ''}
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password ? <span>{errors.password}</span> : ''}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>)
  }

export default Form;
