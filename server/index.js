const express = require('express');
const cors = require('cors');
const basicCardData = require('./database/basicCards');
const { profileData, profileListData } = require('./database/Profile');
const ratingFeedbackData = require('./database/RatingFeedback');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());   //middleware


// API endpoint to fetch BasicCard data
app.use('/v1/api/basicCards', (req, res) => {
  res.json(basicCardData);
});

app.use('/v1/api/profileData', (req, res) => {
  res.json(profileData)
})

app.use('/v1/api/profileListData', (req, res) => {
  res.json(profileListData);
});

app.use('/v1/api/feedbackData', (req, res) => {
  res.json(ratingFeedbackData)
})

app.get('*', (req, res) => {
  res.send(`<h2> Le API response..</h2> <img height=222 width=222 src="https://memeheist.com/wp-content/uploads/2023/08/Hum-Pe-To-Hai-Hi-No-Meme-1-1024x1024.jpg" />`);    
})

app.use('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
