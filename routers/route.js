const express = require('express');
const router = express.Router();

// Base
const {
    welcomeMessage,
    welcomeMessageFunction,
    testEjsView
} = require("../controllers/welcome");

// Base Routes
router.get('/', welcomeMessage);
router.get('/welcome2', welcomeMessageFunction);
router.get('/testejs', testEjsView);

module.exports = router;