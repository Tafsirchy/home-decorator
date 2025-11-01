import React from "react";

const ProductCard = ({ product }) => {
  const { name, image, price, category } = product;
  return (
    <div className="card bg-base-100 border shadow-sm hover:shadow-lg hover:scale-105 transition ease-in-out duration-300">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>Category: {category};</p>
        <p>Price: {price};</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
