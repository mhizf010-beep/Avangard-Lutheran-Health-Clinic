import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('appointments')
      .insert([{ patient_name: name, service: 'General Consultation' }]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Success! Your appointment is booked.");
      setName('');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleBooking} className="p-4 bg-white rounded shadow">
      <input 
        type="text" 
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <button 
        type="submit" 
        disabled={loading}
        className="bg-blue-600 text-white p-2 w-full rounded"
      >
        {loading ? 'Booking...' : 'Book Now'}
      </button>
    </form>
  );
}

