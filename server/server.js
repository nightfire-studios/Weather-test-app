const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = 3000;
app.use(cors())
// Serve the "Hello World" message at /message
app.get('/message', (req, res) => {
    res.send('Hello World');
});

// Serve static files from the 'dist' folder (where Parcel will build the app)
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});