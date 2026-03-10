import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === 'admin' && pass === '1234') navigate('/dashboard/usa');
    else if (user === 'brasil' && pass === '1234') navigate('/dashboard/brazil');
    else alert('Invalid Credentials');
  };

  return (
    <div style={{ background: '#002b5c', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleLogin} style={{ background: 'white', padding: '40px', borderRadius: '15px', color: '#333', textAlign: 'center' }}>
        <h2 style={{ color: '#002b5c' }}>Avangard Admin</h2>
        <input type="text" placeholder="Username" onChange={(e)=>setUser(e.target.value)} style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
}


