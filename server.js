const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let latestSubmission = {
    name: '',
    message: ''
};

app.use(bodyParser.json());

// Serve static files from front-end
app.use(express.static('public'));

// Submit a name and message
app.post('/submit', (req, res) => {
    const { name, message } = req.body;
    if (!name || !message) {
        return res.status(400).json({ error: 'Both fields are required!' });
    }
    latestSubmission = { name, message };
    res.json(latestSubmission);
});

// Fetch the latest submission
app.get('/latest', (req, res) => {
    res.json(latestSubmission);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
