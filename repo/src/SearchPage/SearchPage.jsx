import React from "react";
import "./SearchPage.css";

const itemImage = [
  {
    name: "India Gate All Rounder Feast Rozzana Basmati Rice | Aged Rice | Fluffy and Non-Sticky",
    volume: "1Kg",
    price: 114,
    originalPrice: 118,
    image: "https://cdn.zeptonow.com/production/tr:w-250,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/cc3891b3-2c37-4c5d-a65a-8acccf604123.jpg"
  },
  {
    name: "India Gate Gold Standard Classic Basmati Rice | 2 Years Aged | Extra Long Grains",
    volume: "1Kg",
    price: 236,
    originalPrice: 252,
    image: "https://cdn.zeptonow.com/production/tr:w-250,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/3caedcb1-4b4b-4d66-aa6c-6bb91ca8aad9.jpg"
  },
  {
    name: "India Gate Flavourful and Fine Super Basmati Rice | Perfectly Aged Rice",
    volume: "5Kg",
    price: 783,
    originalPrice: 1100,
    image: "https://cdn.zeptonow.com/production/tr:w-250,ar-24…_variant/a2cd0063-6417-4fd5-9e6c-2ef3f7321608.jpg"
  },
  {
    name: "India Gate Flavourful and Fine Dubar Basmati Rice | Long and Slender Grains | Naturally Aged",
    volume: "5Kg",
    price: 659,
    originalPrice: 750,
    image: "https://cdn.zeptonow.com/production/tr:w-250,ar-24…_variant/7550215c-c125-4743-86f5-7d6d90a4b4da.jpg"
  },
  {
    name: "India Gate Rozzana Lite",
    volume: "1Kg",
    price: 99,
    originalPrice: 104,
    image: "	https://cdn.zeptonow.com/production/tr:w-250,ar-20…_variant/e4b4199c-9491-4963-bd1a-36c0d69021f0.jpg"
  }
];

const SearchPage = ({ searchTerm = "", title }) => {
  const filtered = itemImage.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2>Recent Search</h2>
      <p className="recent-tag">Boat headphones</p>

      <div className="banner">
        <img
          src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.75.3/tr:w-1438,ar-1438-265,pr-true,f-auto,q-80//images/paan-corner/paan-corner-desktop.png"
          alt="Banner"
        />
      </div>

      <div className="Select-Item">
        {filtered.map((item, index) => (
          <div className="Item-Sec" key={index}>
            <button>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1rem", width: "1rem", color: "rgb(255, 50, 105)" }}
              >
                <path
                  d="M12 4v16m8-8H4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <img src={item.image} alt={item.name} />

            <div className="Cover">
              <div className="Left-Side">
                <h6>{item.name}</h6>
                <p>{item.volume}</p>
              </div>
              <div className="Right-Side">
                <h6>₹{item.price}</h6>
                <p>₹{item.originalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage; 