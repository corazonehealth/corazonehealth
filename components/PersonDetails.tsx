"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const PersonDetails = () => {
  const [personDetails, setPersonDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    phone: ''
  });

  const [missingFields, setMissingFields] = useState<string[]>([]);

  const searchParams = useSearchParams();
  
  // Check if searchParams is available, otherwise default to null
  const packageTitle = searchParams?.get('title');
  const monthlyPrice = searchParams?.get('monthlyPrice');
  const yearlyPrice = searchParams?.get('yearlyPrice');

  // Choose packagePrice based on what's available
  const packagePrice = monthlyPrice || yearlyPrice

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonDetails({ ...personDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, cardholderName, cardNumber, expiryDate, cvv } = personDetails;

    const newMissingFields = [];

    if (!name) newMissingFields.push('name');
    if (!email) newMissingFields.push('email');
    if (!phone) newMissingFields.push('phone');
    if (!cardholderName) newMissingFields.push('cardholderName');
    if (!cardNumber) newMissingFields.push('cardNumber');
    if (!expiryDate) newMissingFields.push('expiryDate');
    if (!cvv) newMissingFields.push('cvv');

    if (newMissingFields.length > 0) {
      setMissingFields(newMissingFields);
      return;
    }

    try {
      // Make a POST request to your Stripe API route
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageTitle,
          packagePrice
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Redirect to the Stripe checkout page
        window.location.href = data.url;
      } else {
        console.error('Error creating Stripe session:', data.error);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }

    console.log('Submitting payment');
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
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Enter Your Details</h2>
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
                {missingFields.includes('name') && <p className='text-red-500'>Name is required</p>}
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
                {missingFields.includes('email') && <p className='text-red-500'>Email is required</p>}
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
                {missingFields.includes('phone') && <p className='text-red-500'>Phone number is required</p>}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Enter Card Details</h2>
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
                {missingFields.includes('cardholderName') && <p className='text-red-500'>Cardholder name is required</p>}
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
                {missingFields.includes('cardNumber') && <p className='text-red-500'>Card number is required</p>}
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
                  {missingFields.includes('expiryDate') && <p className='text-red-500'>Expiry date is required</p>}
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
                  {missingFields.includes('cvv') && <p className='text-red-500'>CVV is required</p>}
                </div>
              </div>
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

export default PersonDetails;
