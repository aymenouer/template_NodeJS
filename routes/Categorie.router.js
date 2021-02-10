const express = require('express');
const { checkSchema } = require('express-validator');
let Categorie = require('../models/Categorie.model');

const router = express.Router()


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
  

  
    const categorie = new Categorie({
        name,
        email,

  
    });
 
    categorie.save()
    .then(() => res.json('Categorie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports= router;