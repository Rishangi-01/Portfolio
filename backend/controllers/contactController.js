const Contact = require("../models/Contact");

// =================================
// Create Contact
// =================================
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Create contact
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: contact,
    });
  } catch (error) {
    console.error("Create Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = {
  createContact,
};