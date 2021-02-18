const express = require('express');
const router = express.Router();
const personalHandle = require('../routesHandle/personal')
router.post('/',personalHandle)
module.exports= router;