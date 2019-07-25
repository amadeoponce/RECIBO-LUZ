const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expdSchema = new Schema({
    Nombre: String,
    Direccion: Number,
    Igv: Number,
    MontoPagar: Number,
    NuneroRecibo: Number,

    
});

module.exports = mongoose.model('Recibo a pagar ', expdSchema);