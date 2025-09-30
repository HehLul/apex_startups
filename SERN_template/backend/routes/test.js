const { Router } = require("express");
const router = Router();
// import { supabase } from '../config/database';
const {supabase} = require('../config/database')



// Test database connection
router.get('/db-test', async (req, res) => {
  try {
    // Try to fetch from test_users table
    const { data, error } = await supabase
      .from('test_users')
      .select('*');

    if (error) throw error;

    res.json({
      success: true,
      message: 'Database connection successful!',
      users: data
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Test insert
router.post('/db-test', async (req, res) => {
  try {
    const { name, email } = req.body;

    const { data, error } = await supabase
      .from('test_users')
      .insert([{ name, email }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: 'User created!',
      user: data
    });

  } catch (error) {
    console.error('Insert error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});
module.exports = router;