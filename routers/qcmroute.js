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
router.get('/json', displayQcmJson);
router.get('/new', displayFormQcm);
router.post('/new', createNewForm);
router.get('/:qcmid', displayQcmDetailed);

module.exports = router;

