const mysql = require('mysql');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

// Set up MySQL connection
const mydb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Moinuddin',
  database: 'Moinuddin'
});

// Set up Google Sheets API connection
const oauth2Client = new OAuth2Client('your_client_id', 'your_client_secret');
oauth2Client.setCredentials({ refresh_token: 'your_refresh_token' });
const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

// Set up MySQL query
const query = 'SELECT * FROM experienceDetails';

// Execute MySQL query and retrieve result set
mydb.query(query,(err, result) => {
  if (err) throw err;

  // Write result set to Google Sheet
  const spreadsheetId = 'your_spreadsheet_id';
  const range = 'Sheet1!A1';
  const values = [['Full Name', 'Email', 'Position']].concat(result.map(row => [row.full_name, row.email, row.position]));
  const resource = {
    values,
  };
  sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    resource,
  }, (err, response) => {
    if (err) return console.log(`The API returned an error: ${err}`);
    console.log(`${response.data.updatedCells} cells updated.`);
  });
});