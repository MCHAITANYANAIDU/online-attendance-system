const userModel = require('../models/userModel');

// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const result = await userModel.createUser({ name, email, password });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser };
