const express = require('express');
const router = express.Router();
const path = require('path');
// Handle other routes
// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

router.get('/', (req, res) => {
  console.log(res);
  res.send('Hello from MERN stack');
});

module.exports = router;
