const express = require('express');
const router = express.Router();
const valid = require('../middleware/valid');
const loginHandle = require('../routesHandle/login')
const {loginSchema} = require('../schema/login')
router.post('/',valid(loginSchema),loginHandle)
module.exports= router;