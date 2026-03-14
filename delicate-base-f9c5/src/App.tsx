import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
    <h1 style={{ color: '#2c3e50' }}>Avangard Health Network</h1>
    <p>International Surgical Excellence</p>
    <Link to="/admin" style={{ padding: '12px 24px', backgroundColor: '#3498db', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
      Staff Portal Login
    </Link>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} /> 
        <Route path="/dashboard/usa" element={<Dashboard region="usa" />} />
        <Route path="/dashboard/brazil" element={<Dashboard region="brazil" />} />
      </Routes>
    </Router>
  );
}
