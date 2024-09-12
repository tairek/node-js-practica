const express = require('express');
const router = express.Router();
const client = require('../bot/bot.js');
let servers = client.guilds.cache;

router.get('/perfil',(req,res)=>{
    let array = [];
    servers.forEach((server) => {
        array.push(server);
    });
    res.render('perfil',{user: req.user, client, array});
});

module.exports = router;