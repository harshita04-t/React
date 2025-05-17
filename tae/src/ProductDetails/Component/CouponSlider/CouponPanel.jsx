
import React, { useState } from 'react';
import './couponPanel.css';

const offers = [
  {
    title: '₹100 FREE CASH on Zepto Cafe Items!',
    details: [
      'Get 70% OFF UPTO ₹100 Free Cash on Cafe Items',
      'Coupon is applicable on all Zepto Cafe Items!',
    ],
    minOrder: 1,
  },
  {
    title: 'Get assured rewards with CRED',
    details: [],
    minOrder: 1,
  },
  {
    title: 'Get flat ₹25 discount with BHIM App',
    details: [],
    minOrder: 349,
  },
  {
    title: 'Get up to ₹25 cashback using Amazon Pay Balance',
    details: [],
    minOrder: 399,
  },
  {
    title: 'Assured ₹10 – ₹300 Cashback on using Paytm UPI',
    details: [],
    minOrder: 399,
  },
];

export default function CouponsPanel() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="coupon-panel">
      <div className="header">
        <h3>Coupons & Offers</h3>
        <button className="close-btn">×</button>
      </div>
      {offers.map((offer, index) => (
        <div key={index} className="offer-box">
          <div className="offer-content">
            <strong>{offer.title}</strong>
            {expanded[index] && offer.details.length > 0 && (
              <ul className="details-list">
                {offer.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
            <div className="offer-actions">
              {offer.details.length > 0 && (
                <span className="view-more" onClick={() => toggleExpand(index)}>
                  {expanded[index] ? 'View Less' : 'View More'}
                </span>
              )}
              <span className="min-order">Min Order Required: ₹{offer.minOrder}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
