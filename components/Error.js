import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "#333" }}>404</h1>
      <p style={{ fontSize: "1.5rem", color: "#555", marginTop: "10px" }}>
        Oops! Page not found.
      </p>
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
  );
}
