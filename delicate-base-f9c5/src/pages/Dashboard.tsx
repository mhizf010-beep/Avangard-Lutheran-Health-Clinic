import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Dashboard({ region }: { region: string }) {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) window.location.href = '/admin';
    };
    checkUser();
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const { data } = await supabase.from('appointments').select('*');
    if (data) setPatients(data);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{region.toUpperCase()} Health Dashboard</h1>
      <button onClick={() => supabase.auth.signOut().then(() => window.location.href = '/admin')}>Logout</button>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#34495e', color: '#fff' }}>
            <th style={{ padding: '10px' }}>Patient Name</th>
            <th style={{ padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{p.name}</td>
              <td style={{ padding: '10px' }}>{p.status || 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

