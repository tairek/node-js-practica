const passport = require('../controllers/passport');
const express = require('express');
const router = express.Router();

router.get('/login', passport.authenticate('discord',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/perfil');
});

module.exports = router;