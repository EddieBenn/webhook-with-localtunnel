const express = require('express');
const verifyToken = require('../middleware/jwtMiddleware');
const { handleWebhook, getToken } = require('../controllers/webhookController');

const router = express.Router();

router.get('/get-token', getToken);
router.post('/webhook', verifyToken, handleWebhook);

module.exports = router;
