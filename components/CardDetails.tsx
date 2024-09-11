"use client"

import { useState } from 'react';

const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Card Details Submitted: ", cardDetails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Enter Card Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="cardholderName" className="block text-gray-700">Cardholder Name</label>
            <input
              type="text"
              name="cardholderName"
              id="cardholderName"
              value={cardDetails.cardholderName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mt-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mt-2"
              required
              maxLength={16}
            />
          </div>
          <div className="flex space-x-4 mb-6">
            <div className="w-1/2">
              <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                maxLength={3}
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent-dark transition duration-300">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardDetails;
