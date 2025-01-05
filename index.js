const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/cars', (req, res) => {
    res.json([
        { id: 1, name: 'Tesla Model S', price: '$80,000' },
        { id: 2, name: 'Ford Mustang', price: '$55,000' },
        { id: 3, name: 'Chevrolet Camaro', price: '$50,000' },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

