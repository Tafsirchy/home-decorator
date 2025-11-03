import React from "react";
import useProducts from "../Hooks/useProducts";
import { Link, useParams } from "react-router";

const ProductDetails = () => {
  const { products, loading } = useProducts();

  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  //   fallback for loading
  //   const { name, image, price, category, description } = product || {};

  if (loading) return <p>Loading...</p>;
  const { name, image, price, category, description } = product;

  const handleAddToWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    // const wishlist = existingList ? JSON.parse(existingList) : [];

    let updatedList = [];
    if(existingList) {
      const isDiplicate = existingList.some(prod => prod.id === product.id);
      if(isDiplicate) return alert("Already added to wishlist");
      updatedList = [...existingList, product]
    }
    else {
      updatedList.push(product);
    }
    
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div className="card bg-base-100 border shadow-sm ">
      <figure className="h-84 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <button onClick={handleAddToWishlist} className="btn btn-outline">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
