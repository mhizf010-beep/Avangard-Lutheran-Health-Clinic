import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Dashboard() {
  const [livePatients, setLivePatients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Profile data (You can change these to your name!)
  const profile = {
    name: "Dr. Michael Kelvin",
    email: "michaellkevin9@gmail.com",
    specialty: "Lead Physician"
  };

  // Fetch real data from Supabase
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Connection Error:", error.message);
      } else {
        setLivePatients(data || []);
      }
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  return (
    <div style={{ backgroundColor: '#f4f7f9', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Header Section */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#2c3e50', margin: 0 }}>Staff Dashboard</h1>
        <p style={{ color: '#7f8c8d' }}>Welcome back, <strong>{profile.name}</strong> ({profile.specialty})</p>
      </div>

      {/* Patients Table Section */}
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '15px', backgroundColor: '#3498db', color: '#fff', fontWeight: 'bold' }}>
          Current Appointments
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#ecf0f1', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>Patient Name</th>
              <th style={{ padding: '12px' }}>Service</th>
              <th style={{ padding: '12px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={3} style={{ padding: '20px', textAlign: 'center' }}>Loading live data...</td></tr>
            ) : livePatients.length > 0 ? (
              livePatients.map((appt) => (
                <tr key={appt.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px' }}>{appt.patient_name}</td>
                  <td style={{ padding: '12px' }}>{appt.service || 'General Consultation'}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ backgroundColor: '#2ecc71', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Confirmed</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={3} style={{ padding: '20px', textAlign: 'center' }}>No appointments found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

