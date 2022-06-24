const express = require('express');

const router = express.Router();
const { getAllFlights, getOneFlight, addNewFlight, updateFlight, deleteFlight } = require('../controllers/flightController');

router.get('/', getAllFlights)
router.get('/:id', getOneFlight)
router.post('/', addNewFlight)
router.put('/:id', updateFlight)
router.delete('/:id', deleteFlight)

module.exports = router;

