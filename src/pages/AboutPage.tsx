import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const { data } = useParams();
  console.log("data : ", data);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "blue",
      }}>
      <h1>About Page</h1>
      <h3>Name From Home Page : {data}</h3>
      <button
        onClick={() => navigate(-1)} // go back
        style={{
          width: 200,
          height: 50,
          backgroundColor: "green",
          color: "white",
          borderRadius: 5,
          cursor: "pointer",
        }}>
        Back to Home
      </button>
    </div>
  );
};

export default AboutPage;
