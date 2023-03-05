import React from "react";

const ViewProduct = ({ product }) => {
  return (
    <div >
      <h2>{product.title}</h2>
      <p>description : {product.description}</p>
      <p>rating : {product.rating}</p>
      <>
        {product.links.map((item , i) => {
          return (
            <div key={i}>
              <h3>store : {item}</h3>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default ViewProduct;
