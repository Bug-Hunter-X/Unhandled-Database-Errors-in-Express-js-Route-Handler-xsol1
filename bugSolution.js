const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database operation to fetch user data using userId ...
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Server error');
  }
});