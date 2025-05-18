import React from "react";
import "./SearchPage.css";
const itemImage=[
  {
    name:"India Gate All Rounder Feast Rozzana Basmati Rice | Aged Rice | Fluffy and Non-Sticky",
    volume: "1Kg",
    price: 114,
    originalPrice: 118,
    image: "https://cdn.zeptonow.com/production/tr:w-250,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/cc3891b3-2c37-4c5d-a65a-8acccf604123.jpg"
  },
]
 const SearchPage = ({ searchTerm ,title}) => {
  const filtered = itemImage.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2>Recent Search</h2>
      <p className="recent-tag">Boat headphones</p>

       <div className="banner">
        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.75.3/tr:w-1438,ar-1438-265,pr-true,f-auto,q-80//images/paan-corner/paan-corner-desktop.png" alt="Banner" />
      </div>

      <div className="Select-Item">
         {filtered.map((item, index) => (
       <div className="Item-Sec"  key={index}>
      
         <button>
            <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height:'1rem', width: '1rem', color: 'rgb(255, 50, 105)'}}><path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
         </button>
         <img src={item.image}
         alt={item.name}/>

         <div className="Cover">
          <div className="Left-Side">
           <h6>{item.name}</h6>
           <p>{item.volume}</p>
          </div>
          <div  className="Right-Side">
            <h6>₹{item.price}</h6>
            <p>₹{item.originalPrice}</p>
          </div>
         </div>
       </div>

       ))}
       
      </div>
    </div>
  );
}

export default SearchPage;