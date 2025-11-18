const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

// public for now
router.post('/login', AdminController.login);
router.post('/tournaments', AdminController.createTournament);
router.get('/tournaments', AdminController.listTournaments);
router.get('/tournaments/:id', AdminController.getTournament);

module.exports = router;
