const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /auth/user:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 */

router.post('/user', (req, res) => {
  const { username, email, password } = req.body;
  res.send('User Created Successfully!')
})

module.exports = router;