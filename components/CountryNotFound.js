import { Link } from "react-router-dom";
import "./CountryNotFound.css"
const CountryNotFound = () => {
    return (
        <>
      <div className="error-container">
        <div className="error-icon">❌</div>
        <h2>Oops! Something went wrong</h2>
        <p>The country you are looking for was not found. Please check the spelling and try again.</p>
        <Link to="/">
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Go Home
      </button>
    </Link>
      </div>
    </>
    );
  };
  
  export default CountryNotFound;
