const express = require('express');
const router = express.Router();
const ReciboLuz = require('../models/ReciboLuz);


router.get('/', async (req,res) =>{
    
    const ReciboLuz = await ReciboLuz.find();
    console.log(ReciboLuz);
    res.render('index', {
        ReciboLuz
    });
})

router.post('/add', async (req, res) => {

    const expd = new ReciboLuz(req.body);
    console.log(expd);
    await expd.save();
    //res.send('echo');
    res.redirect('/');
})

router.get('/MontoPagar/:id', async (req,res) => {
    const{ id } = req.params;
    const exp = await ReciboLuz.findById(id);
    if(exp.NumeroRecibo ==='Electro centro' && exp.NumeroRecibo = 1 && Nombre = '' && Igv = 18 && MontoPaga>=0){
        res.send('Monto a Pagar');
  
     }
    
})
module.exports = router;