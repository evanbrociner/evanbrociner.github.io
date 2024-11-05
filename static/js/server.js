// server.js

require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const multer = require("multer");
const pdf = require("pdf-parse");
const fs = require("fs");
const {GoogleGenerativeAI} = require("@google/generative-ai");

const app = express();
const upload = multer({dest: "uploads/"}); // Directory to store uploaded files

// Initialize Google Generative AI with API key from environment variables
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({model: "gemini-1.5-pro-002"});

// Configuration for generating responses
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain"
};

// Function to extract text from PDF
async function extractPdfText(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);
  return pdf(dataBuffer).then(function (data) {
    return data.text; // The extracted text
  });
}

// Endpoint to handle file upload and processing
app.post("/upload", upload.single("itemizedBill"), async (req, res) => {
  try {
    const pdfPath = req.file.path; // Get the path of the uploaded PDF

    // Step 2: Extract text from the uploaded PDF
    const extractedText = await extractPdfText(pdfPath);
    console.log("Extracted Text:", extractedText); // Log the extracted text

    // Step 3: Analyze the extracted text with AI
    const chatSession = model.startChat({generationConfig, history: []});

    const aiResult = await chatSession.sendMessage(extractedText);
    const responseText = aiResult.response.text(); // Get the AI response

    // Send response back to the client
    res.json({success: true, extractedText, aiResponse: responseText});

    // Optional: Delete the uploaded PDF after processing
    fs.unlinkSync(pdfPath); // Clean up the uploaded file
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({success: false, error: "An error occurred during processing."});
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
