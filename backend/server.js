const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Setup
app.use(cors());
app.use(express.json());

// Target Endpoint: POST /api/enquiry
app.post('/api/enquiry', (req, res) => {
  const { name, email, phone } = req.body;

  // Server-side Field Validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Validation Error: All fields (name, email, phone) are strictly required."
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Validation Error: Invalid email format structural pattern."
    });
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Validation Error: Phone number sequence must contain exactly 10 digital characters."
    });
  }

  // Success Logging and Response Pipeline
  console.log('Valid Registration Received successfully:', { name, email, phone });

  return res.status(200).json({
    success: true,
    message: "Enquiry verified and processed successfully.",
    receivedData: { name, email, phone }
  });
});

app.listen(PORT, () => {
  console.log(`Server executing live inside port cluster: http://localhost:${PORT}`);
});

