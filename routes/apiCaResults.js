// routes/apiCaResults.js

const express = require('express');
const {
    getCaResults,
    getCaResultsByTermIdSessionId,
    createCaResult,
    updateCaResult,
    deleteCaResult
} = require('../controllers/apiCaResultsController');

const router = express.Router();
const apiController = require('../controllers/apiCaResultsController');

router.get('/caresults', getCaResults);
router.get('/caresults/:termid:sessionId', getCaResultsByTermIdSessionId);
router.post('/caresults', createCaResult);
router.put('/caresults/:Id',updateCaResult);
//router.delete('/caresults/:Id', apiController.deleteCaResult);
router.delete('/caresults/:Id', deleteCaResult);

module.exports = router;
