const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const jwt =require('jsonwebtoken')
const {check,validationResult}=require('express-validator')
const bcrypt=require('bcrypt')
const { v4: uuidv4 } = require('uuid');

const saltRounds = 10; // Number of salt rounds for bcrypt

const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    } 
  });

  const upload = multer({ storage: storage });

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({

  service: 'gmail',

  auth: {

    user: 'moinuddin6495@gmail.com',

    pass: 'rizenepctmibdxuj',

  }

});

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Moinuddin',
    database: 'Moinuddin'
});

app.post('/details',(req, res) => {
  const { first_name, last_name, email, mobileNo, message } = req.body;
  const values = [first_name, last_name, email, mobileNo, message];

  pool.getConnection((err, con) => {
      if (err) {
          console.error('Error getting MySQL connection from pool: ' + err);
          return res.status(500).json({ error: 'Internal server error' });
      }
     // console.log('MySQL Connected...');

      const mailOptions = {
          from: email,
          to: 'ruby.jain@fosteringlinux.com', 
          subject: 'New User Data', 
          text: message,
          html: `<b>Name:</b> ${first_name} ${last_name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error);
              res.status(500).send('Error sending email');
          } else {
              console.log(`Email sent: ${info.response}`);
              res.status(200).send('Email sent');
          }
      });

      const sql = "INSERT INTO details(first_name, last_name, email, mobileNo, message) VALUES (?)";

      con.query(sql, [values], (err, result) => {
          con.release(); 
          
          if (err) {
              console.error('Error executing MySQL query: ' + err);
              return res.status(500).json({ error: 'Internal server error' });
          }
          res.json(result);
      });
  });
});



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Moinuddin',
    database: 'Moinuddin'
  });
  
  // Connect
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL Connected...');
  });
  
  // Handle POST request for inserting data into internDetails table
  app.post('/internDetails', upload.single('resume'), (req, res) => {
    const { full_name, email, mobileNo,resumePath,education, skills, additionalInformation } = req.body;
    const values = [full_name, email, mobileNo, resumePath, education, skills, additionalInformation];
 
  const mailOptions = {
    from: email,
    to: 'daily_interns_reporting@fosteringlinux.com',
    subject: 'New User Data', 
    text: generateTextContent(req.body),
    html: generateHTMLContent(req.body)};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
    } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).send('Email sent');
    }
});
function generateTextContent(formData) {
  let textContent = '';
  
  // Process the Full Name field first
  if (formData.full_name && formData.full_name.trim() !== '') {
      textContent += `Full Name: ${formData.full_name}\n`;
  }

  // Process the rest of the fields
  for (const key in formData) {
      // Skip the Full Name field if it has been processed separately
      if (key !== 'full_name' && formData[key] && formData[key].trim() !== '') {
          textContent += `${key}: ${formData[key]}\n`;
      }
  }

  return textContent;
}

// Function to dynamically generate HTML content for email

function generateHTMLContent(formData) {
  let htmlContent = '';

  // Process the Full Name field first
  if (formData.full_name && formData.full_name.trim() !== '') {
      htmlContent += `<b>Full Name:</b> ${formData.full_name}<br>`;
  }

  // Process the rest of the fields
  for (const key in formData) {
      // Skip the Full Name field if it has been processed separately
      if (key !== 'full_name' && formData[key] && formData[key].trim() !== '') {
          htmlContent += `<b>${key}:</b> ${formData[key]}<br>`;
      }
  }

  return htmlContent;
}


  
    const sql = 'INSERT INTO internDetails (first_name, email, mobileNo, resume, education, skills, additionalInformation) VALUES (?)';
    db.query(sql, [values], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting data into internDetails table');
      } else {
        res.status(200).send('Data inserted into internDetails table successfully');
      }
    });
  });
  


  const db1 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Moinuddin',
    database: 'Moinuddin'
  });
  
  // Connect
  db1.connect((err) => {
    if (err) {
      throw err;
    }
   // console.log('MySQL Connected...');
  });
  
  // Handle POST request for inserting data into internDetails table
  app.post('/experienceDetails', upload.single('resume'), (req, res) => {
    const { full_name, email, mobileNo,resumePath,education, skills, additionalInformation ,companyName,position,startDate,endDate,description} = req.body;
   // const resumePath = req.body;
  //  let resumePath=null; 
  //  if(req.file && req.file.path){
  //   resumePath= req.file.path;
  //  }

  const mailOptions = {
    from: email,
    to: 'daily_interns_reporting@fosteringlinux.com',
    subject: 'New User Data',
    text: generateTextContent(req.body),
    html: generateHTMLContent(req.body)};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
    } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).send('Email sent');
    }
});
function generateTextContent(formData) {
  let textContent = '';
  
  // Process the Full Name field first
  if (formData.full_name && formData.full_name.trim() !== '') {
      textContent += `Full Name: ${formData.full_name}\n`;
  }

  // Process the rest of the fields
  for (const key in formData) {
      // Skip the Full Name field if it has been processed separately
      if (key !== 'full_name' && formData[key] && formData[key].trim() !== '') {
          textContent += `${key}: ${formData[key]}\n`;
      }
  }

  return textContent;
}

// Function to dynamically generate HTML content for email

function generateHTMLContent(formData) {
  let htmlContent = '';

  // Process the Full Name field first
  if (formData.full_name && formData.full_name.trim() !== '') {
      htmlContent += `<b>Full Name:</b> ${formData.full_name}<br>`;
  }

  // Process the rest of the fields
  for (const key in formData) {
      // Skip the Full Name field if it has been processed separately
      if (key !== 'full_name' && formData[key] && formData[key].trim() !== '') {
          htmlContent += `<b>${key}:</b> ${formData[key]}<br>`;
      }
  }

  return htmlContent;
}


  const checkEmailQuery = 'SELECT COUNT(*) AS count FROM registration WHERE email = ?';
  db1.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).send('Internal server error');
    }

    const emailCount = results[0].count;

    if (emailCount > 0) {
      // Email already registered
      return res.status(400).send('Email already registered');
    }else{
  
    const sql = 'INSERT INTO experienceDetails (full_name, email, mobileNo, resume, education, skills, additionalInformation,companyName,position,startDate,endDate,descriptions) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?,?)';
    db.query(sql, [full_name, email, mobileNo, resumePath, education, skills, additionalInformation,companyName,position,startDate,endDate,description], (err, result) => {
      if (err) {
        console.log(err);

        res.status(500).send('Error inserting data into internDetails table');
      } else {
        res.status(200).send('Data inserted into internDetails table successfully');
      }
    });
  }
});
  });
  
  const db2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Moinuddin',
    database: 'Moinuddin'
  });
  
  // Connect
  db2.connect((err) => {
    if (err) {
      throw err;
    }
  //  console.log('MySQL Connected...');
  });
  
  // Handle POST request for inserting data into registrationForm table
  app.post('/registrationform', upload.single('resume'), async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Generate salt
        const salt = await bcrypt.genSalt(saltRounds);
        // Hash the password with the generated salt
        const hashPassword = await bcrypt.hash(password, salt);

        // Check if email already exists in the database
        const checkEmailQuery = 'SELECT COUNT(*) AS count FROM registration WHERE email = ?';
        db2.query(checkEmailQuery, [email], async (err, results) => {
            if (err) {
                console.error('Error checking email:', err);
                return res.status(500).send('Internal server error');
            }

            const emailCount = results[0].count;

            if (emailCount > 0) {
                // Email already registered
                return res.status(400).send('Email already registered');
            } else {
                // Email is not registered, proceed with registration
                const insertQuery = 'INSERT INTO registration(name, email, password) VALUES (?, ?, ?)';
                // Use the hashed password instead of the plain password
                db2.query(insertQuery, [name, email, hashPassword], (err, result) => {
                    if (err) {
                        console.error('Error inserting data into registration table:', err);
                        return res.status(500).send('Error inserting data into registration table');
                    } else {
                        return res.status(200).send('Data inserted into registration table successfully');
                    }
                });
            }
        });
    } catch (error) {
        // Handle error appropriately
        console.error("Error:", error);
        res.status(500).send("Error in registration");
    }
});
  

  const db3 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Moinuddin',
    database: 'Moinuddin'
  });
  
  // Connect
  db3.connect((err) => {
    if (err) {
      throw err;
    }
  //  console.log('MySQL Connected...');
  });
  
  // Handle POST request for inserting data into internDetails table
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user data from the database based on the provided email
        const checkEmailQuery = 'SELECT * FROM registration WHERE email = ?';
        db.query(checkEmailQuery, [email], async (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).send('Error querying database');
            }

            if (results.length === 0) {
                // Email not found
                return res.status(401).send('Invalid email or password');
            }

            // Email found, now compare passwords
            const hashedPassword = results[0].password;
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            if (passwordMatch) {
                // Passwords match, login successful
                return res.status(200).send('Login successful');
            } else {
                // Passwords don't match
                return res.status(401).send('Invalid email or password');
            }
        });
    } catch (error) {
        // Handle error appropriately
        console.error("Error:", error);
        res.status(500).send("Error in login");
    }
});

// Password Reset Functionality

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Function to send OTP via email
async function sendOTPByEmail(email, otp) {
  try {
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'moinuddin6495@gmail.com', // Your Gmail address
              pass: 'rizenepctmibdxuj' // Your Gmail password
          }
      });

      let info = await transporter.sendMail({
          from: 'moinuddin6495@gmail.com',
          to: email,
          subject: 'Password Reset OTP',
          text: `Your OTP for password reset is: ${otp}`
      });

      console.log("OTP sent: %s", info.messageId);
  } catch (error) {
      console.error("Error sending email:", error);
      throw error;
  }
}

app.post('/forgotpassword', async (req, res) => {
  const { email } = req.body;

  // Generate OTP
  otp = generateOTP();

  try {
      
      const insertOTPSql = 'INSERT INTO password_reset (email, otp, timestamp) VALUES (?, ?, NOW())';
      db.query(insertOTPSql, [email, otp], async (err, result) => {
          if (err) {
              console.error('Error inserting OTP into database:', err);
              return res.status(500).send('Error generating OTP');
          }

          // Send OTP via email
          await sendOTPByEmail(email, otp);

          return res.status(200).send('OTP sent to your email');
      });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error in forgot password");
  }
});

app.post('/resetpassword', async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
      // Retrieve the stored OTP and timestamp from the database
      const getOTPSql = 'SELECT otp, timestamp FROM password_reset WHERE email = ?';
      db.query(getOTPSql, [email], async (err, results) => {
          if (err) {
              console.error('Error retrieving OTP from database:', err);
              return res.status(500).send('Error resetting password');
          }

          if (results.length === 0) {
              // No OTP found for the provided email
              return res.status(401).send('Invalid OTP or email');
          }

          const storedOTP = results[0].otp;
          const timestamp = new Date(results[0].timestamp).getTime();
          const currentTimestamp = new Date().getTime();

          // Verify OTP and check if it's still valid (e.g., within a certain time limit)
          if (otp != storedOTP || currentTimestamp - timestamp > 600000) { // OTP expires after 10 minutes
              return res.status(401).send('Invalid OTP or OTP expired');
          }

          // Hash the new password
          const hashedPassword = await bcrypt.hash(newPassword, 10);

          // Update the user's password in the database
          const updatePasswordSql = 'UPDATE registration SET password = ? WHERE email = ?';
          db.query(updatePasswordSql, [hashedPassword, email], async (err, result) => {
              if (err) {
                  console.error('Error updating password in database:', err);
                  return res.status(500).send('Error resetting password');
              }

              // Delete the used OTP from the database
              const deleteOTPSql = 'DELETE FROM password_reset WHERE email = ?';
              db.query(deleteOTPSql, [email], (err, result) => {
                  if (err) {
                      console.error('Error deleting OTP from database:', err);
                  }
              });

              return res.status(200).send('Password reset successful');
          });
      });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error in reset password");
  }
});

  // Start server
  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
  