const express = require('express');
const router = express.Router();

const {
    displayQcms,
    displayFormQcm,
    createNewForm,
    displayQcmJson,
    displayQcmDetailed
} = require("../controllers/qcms");

// QCM routes
router.get('/', displayQcms);
router.get('/:id', displayQcmDetailed);
router.get('/json', displayQcmJson);
router.get('/new', displayFormQcm);
router.post('/new', createNewForm);

module.exports = router;

