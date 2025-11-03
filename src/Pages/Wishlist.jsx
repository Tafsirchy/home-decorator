import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none")
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);

  const sortedItems = () => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a,b) => a.price - b.price);
    }
    else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a,b) => b.price - a.price);
    }
    else {
      return wishlist;
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-500">
            ({wishlist.length}) Products Found
          </span>
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-6">
        {sortedItems().map((prod) => (
          <div className="card card-side bg-base-100 shadow-sm border">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={prod.image}
                alt={prod.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{prod.name}</h2>
              <p className="text-base-content/70">{prod.category}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">${prod.price}</div>
              {/* <button onClick={() => (prod.id)} className="btn btn-outline">Remove</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
