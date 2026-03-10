const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

// Global Tagline
const tagline = "Avangard Clinic — Transforming lives with safety and results for over 14 years.";

// 1. Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 2. Admin Login Page
app.get('/admin', (req, res) => {
    res.render('admin-login', { tagline });
});

// 3. Login Logic
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
        res.redirect('/dashboard/usa');
    } else if (username === 'brasil' && password === '1234') {
        res.redirect('/dashboard/brazil');
    } else {
        res.send('Invalid Login. Try admin/1234 or brasil/1234');
    }
});

// 4. USA Handle: Dr. Michael Kelvin
app.get('/dashboard/usa', (req, res) => {
    res.render('dashboard', { 
        title: "Avangard USA - Orthopedic Surgery", 
        lang: "en", 
        doctor: "Dr. Michael Kelvin",
        specialty: "Orthopedic Surgery",
        location: "Fort Wayne, IN",
        email: "michaellkevin9@gmail.com",
        tagline
    });
});

// 5. Brazil Handle: Dr. Lucas Felix Rossi
app.get('/dashboard/brazil', (req, res) => {
    res.render('dashboard', { 
        title: "Avangard Brasil - Bariatric Surgery", 
        lang: "pt", 
        doctor: "Dr. Lucas Felix Rossi",
        specialty: "Bariatric Surgery (Cirurgia Bariátrica)",
        location: "Porto Alegre, Brazil",
        email: "derojulien85@gmail.com",
        tagline
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n🏥 ${tagline}`);
    console.log(`🔗 Admin Portal: http://localhost:${PORT}/admin\n`);
});



