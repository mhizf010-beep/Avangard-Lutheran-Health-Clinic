import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else window.location.href = '/dashboard/usa';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <form onSubmit={handleLogin} style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2>Staff Portal</h2>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }} required />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '4px' }}>Login</button>
      </form>
    </div>
  );
}

