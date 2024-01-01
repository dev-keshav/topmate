const express = require('express');
const cors = require('cors');
const basicCardData = require('./database/basicCards');
const profleData = require('./database/Profile');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());   //middleware


// API endpoint to fetch BasicCard data
app.use('/v1/api/basicCards', (req, res) => {
  res.json(basicCardData);
});

app.get('/v1/api/profileData', (req, res) => {
  res.json(profleData)
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
