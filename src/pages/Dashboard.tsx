import { useState } from 'react';

export default function Dashboard({ region }: { region: 'usa' | 'brazil' }) {
  const isUSA = region === 'usa';
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: isUSA ? "Dr. Michael Kelvin" : "Dr. Lucas Felix Rossi",
    email: isUSA ? "michaellkevin9@gmail.com" : "derojulien85@gmail.com",
    specialty: isUSA ? "Orthopedic Surgery" : "Bariatric Surgery"
  });

  const patients = isUSA ? [
    { name: "James Wilson", time: "08:30 AM", procedure: "Hip Arthroplasty", status: "In Theater" },
    { name: "Sarah Connor", time: "02:15 PM", procedure: "Spinal Fusion", status: "Scheduled" }
  ] : [
    { name: "Carlos Silva", time: "07:00 AM", procedure: "Gastric Bypass", status: "Recovery" },
    { name: "Beatriz Souza", time: "09:45 AM", procedure: "Sleeve Gastrectomy", status: "In Theater" }
  ];

  return (
    <div style={{ backgroundColor: '#f4f7f9', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Avangard {isUSA ? 'USA' : 'Brasil'} Portal</h2>
        <button onClick={() => window.location.href='/admin'} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px' }}>Logout</button>
      </header>

      <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '25px', borderRadius: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <h3>Provider Profile</h3>
          <button onClick={() => setIsEditing(!isEditing)} style={{ background: '#003366', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '5px' }}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
        {isEditing ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} style={{padding:'8px'}} />
            <input value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} style={{padding:'8px'}} />
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Specialty:</strong> {profile.specialty}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '25px', borderRadius: '12px' }}>
        <h3>Schedule</h3>
        <table style={{ width: '100%', textAlign: 'left' }}>
          <thead><tr style={{borderBottom:'1px solid #eee'}}><th>Patient</th><th>Status</th></tr></thead>
          <tbody>
            {patients.map((p, i) => (
              <tr key={i} style={{borderBottom:'1px solid #eee'}}><td style={{padding:'10px 0'}}>{p.name}</td><td>{p.status}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

