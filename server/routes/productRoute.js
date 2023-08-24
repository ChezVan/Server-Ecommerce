const express = require('express');
const router = express.Router()
const {getAllProducts} = require('../controllers/productCtrl')

router.get('/', getAllProducts)




module.exports = router