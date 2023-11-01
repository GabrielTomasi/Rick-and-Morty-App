import { useState, useEffect } from "react";
import validation from "../../validation";
const LoginForm = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

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
  const handleLogin = () => {
    setSingUp(!singUp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!singUp) login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <div>

          <label>User Mail:</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
            </div>
            <div>

          {errors.email ? <span>{errors.email}</span> : ""}
            </div>
        </div>
        <div>
            <div>

          <label>Password</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
            </div>
            <div>

          {errors.password ? <span>{errors.password}</span> : ""}
            </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
