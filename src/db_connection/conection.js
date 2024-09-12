const mongoose = require('mongoose');

const password = 'josesalazar78';
const dbName = 'articulosPrueba';
const uri = `mongodb+srv://tairek:${password}@cluster0.wiax3.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`

module.exports = ()=> mongoose.connect(uri);