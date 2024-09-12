const express = require('express');
const router = express.Router();
const connection = require('../db_connection/conection');
const ArticuloModel = require('../models/articulo.model');

router.get('/articulos/:titulo',async(req,res)=>{

    try {
        await connection();
        const allArticulos = await ArticuloModel.find({titulo:req.params.titulo});
        if(allArticulos.length == 0) res.redirect('/articulos');
        console.log(allArticulos);
        res.render('articuloPlantilla',{art: allArticulos[0]});
    } catch (err) {
        console.log(err);
    }
    
    
});

module.exports = router;