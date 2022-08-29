const { Router } = require('express');
const { allCategories } = require('../controllers/meal');

const RootRouter = Router();
const API_V1 = '/v1'

RootRouter.use(`${API_V1}/categories`, allCategories);

module.exports = RootRouter