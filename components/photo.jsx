import React from "react";
import useFetch from "../hooks/useFetch";
import "./photos.css";

const Photos = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <div className="wrapper">
      <h1>Photos</h1>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {data.slice(0, 12).map((item, index) => (
          <div className="box" key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;