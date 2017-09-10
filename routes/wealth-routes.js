const express = require('express');
const wealthRoutes = express.Router();
const wealthsController = require('../controllers/wealths-controller');


wealthRoutes.get('/', wealthsController.index);
wealthRoutes.post('/', wealthsController.create);
wealthRoutes.put('/:id', wealthsController.update);
wealthRoutes.delete('/:id', wealthsController.delete);

module.exports = wealthRoutes;
