import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface productType {
  id: number;
  name: string;
  price: number;
  description: string;
}

const HomePage = () => {
  const navigation = useNavigate();
  const [name, setName] = useState<string>("Dalin");
  const [age, setAge] = useState<number>(18);
  // const [product, setProduct] = useState<productType>({
  //   id: 1,
  //   name: "Product 1",
  //   price: 100,
  //   description: "This is Product 1",
  // });
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}>
      <h1>HomePage</h1>
      <h3>Name : {name}</h3>
      {/* <Link to={"about-us"}> */}
      <button
        onClick={() => navigation(`about-us/${name}`)}
        style={{
          width: 200,
          height: 50,
          backgroundColor: "green",
          color: "white",
          borderRadius: 5,
          cursor: "pointer",
        }}>
        Click to About Page
      </button>
      {/* </Link> */}
    </div>
  );
};

export default HomePage;
