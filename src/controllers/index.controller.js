const controller = {};
// const client = require('../bot/bot');
// let servers = client.guilds.cache;


controller.index = (req, res) =>{
    res.render('index');

};

module.exports = controller;