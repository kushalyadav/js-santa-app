const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mailer = require('./src/server/sendEmail.js');

let message = 'Default Message';

app.use(bodyParser());
app.use(morgan());
app.use(cors()); // Enable CORS for all routes


app.use(express.static('public'));

// Server the built files.
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});


// Using the server to direct the mail sending to a server file, for a cleaner code
app.post('/send-email', async (req, res) => {
  message = req.body.message
  res.status(200).send('Email details updated');
  mailer.sendEmail(message)
});


const listener = app.listen( process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
