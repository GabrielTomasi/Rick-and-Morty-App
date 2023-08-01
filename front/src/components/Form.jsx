import { useState, useEffect} from "react";
import validation from "../validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    validation(userData, setErrors, errors)
}, [userData])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
    validation({ ...userData, [name]: value }, setErrors, errors);
};

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Mail:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>
        <br />
        <button tipe="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
