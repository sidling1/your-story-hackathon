const express = require('express');
const app = express();
const port = 5000;


const userRoutes = require('./routes/userRoutes')

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example of a POST route
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});

app.use('/user',userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
