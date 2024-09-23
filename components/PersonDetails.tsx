"use client";

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const PersonDetails = () => {
  const [personDetails, setPersonDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: "",
    email: "",
    phone: ""
  });

  const searchParams = useSearchParams();
  const packageTitle = searchParams.get('title');
  const packagePrice = searchParams.get('price');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonDetails({ ...personDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, cardholderName, cardNumber, expiryDate, cvv } = personDetails;

    // Initialize an array to collect missing fields
    const missingFields = [];

    // Check for missing contact details
    if (!name) missingFields.push("Name");
    if (!email) missingFields.push("Email");
    if (!phone) missingFields.push("Phone Number");

    // Check for missing card details
    if (!cardholderName) missingFields.push("Cardholder Name");
    if (!cardNumber) missingFields.push("Card Number");
    if (!expiryDate) missingFields.push("Expiry Date");
    if (!cvv) missingFields.push("CVV");

    // If there are missing fields, alert the user
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    console.log("Card Details Submitted: ", personDetails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        {packageTitle && packagePrice && (
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold">You are purchasing:</h2>
            <p className="text-xl">{packageTitle}</p>
            <p className="text-xl">{packagePrice}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Enter Your Contact Details</h2>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={personDetails.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={personDetails.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700">Your Phone Number</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={personDetails.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                required
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Enter Card Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="cardholderName" className="block text-gray-700">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  id="cardholderName"
                  value={personDetails.cardholderName}
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
                  value={personDetails.cardNumber}
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
                    value={personDetails.expiryDate}
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
                    value={personDetails.cvv}
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
      </div>
    </div>
  );
};

export default PersonDetails;
