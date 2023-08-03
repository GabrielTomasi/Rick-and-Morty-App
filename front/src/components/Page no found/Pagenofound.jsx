import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Return to the login page:</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PageNotFound;
