import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

interface Patient {
  id: string;
  patient_name: string;
  service: string;
  created_at: string;
}

export default function Dashboard({ region }: { region: 'usa' | 'brazil' }) {
  const isUSA = region === 'usa';
  const [isEditing, setIsEditing] = useState(false);
  const [livePatients, setLivePatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

const markComplete = async (id) => {
  const { error } = await supabase
    .from('appointments')
    .update({ status: 'completed' })
    .eq('id', id);

  if (!error) {
    // Refresh the list locally so the patient disappears immediately
    setLivePatients(prev => prev.filter(appt => appt.id !== id));
  }
};
  const [profile, setProfile] = useState({
    name: isUSA ? "Dr. Michael Kelvin" : "Dr. Lucas Felix Rossi",
    email: isUSA ? "michaellkevin9@gmail.com" : "derojulie@clinic.br",
    specialty: isUSA ? "Orthopedic Surgery" : "Bariatric Surgery"
  });

  // --- FETCH LIVE DATA FROM SUPABASE ---
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Supabase Error:", error.message);
      } else {
        setLivePatients(data || []);
      }
      setLoading(false);
    };

    fetchAppointments();
  }, []);  const { data, error } = await supabase
  .from('appointments')
  .select('*')
  .eq('status', 'pending') // Only show patients who aren't finished yet
  .order('created_at', { ascending: false });


  return (
    <div style={{ backgroundColor: '#f4f7f9', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Header Section */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div>
          <h1 style={{ margin: 0, color: '#2c3e50' }}>{isUSA ? "Admin Dashboard" : "Painel do Administrador"}</h1>
          <p style={{ color: '#7f8c8d', margin: '5px 0 0' }}>{isUSA ? "Welcome back," : "Bem-vindo de volta,"} {profile.name}</p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          style={{ backgroundColor: '#3498db', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' }}
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        
        {/* Profile Card */}
        <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 style={{ borderBottom: '2px solid #f4f7f9', paddingBottom: '10px' }}>{isUSA ? "Staff Profile" : "Perfil da Equipe"}</h2>
          <div style={{ marginTop: '15px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: '#95a5a6' }}>Email</label>
            <p style={{ fontWeight: 'bold' }}>{profile.email}</p>
            
            <label style={{ display: 'block', fontSize: '12px', color: '#95a5a6', marginTop: '10px' }}>{isUSA ? "Specialty" : "Especialidade"}</label>
            <p style={{ fontWeight: 'bold' }}>{profile.specialty}</p>
          </div>
        </section>

        {/* Live Appointments Table */}
        <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 style={{ borderBottom: '2px solid #f4f7f9', paddingBottom: '10px' }}>
            {isUSA ? "Live Appointments" : "Consultas ao Vivo"}
          </h2>
          
          {loading ? (
            <p style={{ padding: '20px', textAlign: 'center' }}>Loading clinic data...</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#7f8c8d', borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '10px' }}>{isUSA ? "Patient Name" : "Nome do Paciente"}</th>
                  <th style={{ padding: '10px' }}>{isUSA ? "Service" : "Serviço"}</th>
                  <th style={{ padding: '10px' }}>{isUSA ? "Status" : "Status"}</th>
                </tr>
              </thead>
              <tbody>
                {livePatients.length > 0 ? (
                  livePatients.map((appt) => (
                    <tr key={appt.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                      <td style={{ padding: '12px', fontWeight: 500 }}>{appt.patient_name}</td>
                      <td style={{ padding: '12px', color: '#34495e' }}>{appt.service || "General Checkup"}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ backgroundColor: '#e1f5fe', color: '#01579b', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                          Confirmed
                        </span>
                      </td>
                    </tr> <td style={{ padding: '12px' }}>
  <button 
    onClick={() => markComplete(appt.id)}
    style={{ backgroundColor: '#2ecc71', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
  >
    Complete
  </button>
</td>

                  ))
                ) : ( 
                  <tr>
                    <td colSpan={3} style={{ padding: '30px', textAlign: 'center', color: '#95a5a6' }}>
                      No live appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
}

