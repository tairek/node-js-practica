const express = require('express');
const router = express.Router();
const connection = require('../db_connection/conection');
const ArticuloModel = require('../models/articulo.model');

let articulos = [];


router.get('/articulos',async(req,res)=>{
    
    try {
        await connection();
        const articulosTabla = await ArticuloModel.find();
        res.render('articulos',{cantidad: articulosTabla.length, articulosTabla});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en la base de datos');
        return;
    }

});

module.exports = router;