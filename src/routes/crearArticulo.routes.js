const express = require('express');
const router = express.Router();

router.get('/crearArticulo', function (req,res){
    res.render('crearArticulo');
});

module.exports = router;