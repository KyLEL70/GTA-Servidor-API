const { Router } = require('express');
const router = Router();
const _  = require('underscore');

const personajes = require('../sample.json');

router.get('/', (req, res) => {
    res.json(personajes);
});


router.post('/', (req, res) => {
   const {Nombre, Edad, Nacionalidad, Rol, Afiliacion}= req.body;
   if(Nombre && Edad && Nacionalidad && Rol && Afiliacion) {
       const id = personajes.length + 1;
       const nuevoPersonaje = {...req.body};
       console.log(nuevoPersonaje);
       res.json("Correcto!");
       personajes.push(nuevoPersonaje);
       res.json(personajes);
   } else {
    res.status(500).json({error: 'Hubo un error'});
   }
});

router.put('/:id', (req, res) => {
   const { id } = req.params;
   const { Nombre, Edad, Nacionalidad, Rol, Afiliacion } = req.body;
   if(Nombre && Edad && Nacionalidad && Rol && Afiliacion) {
      _.each(personajes, (personaje, i) => {
         if(personaje.id == id) {
            personaje.Nombre = Nombre;
            personaje.Edad = Edad;
            personaje.Nacionalidad = Nacionalidad;
            personaje.Rol = Rol;
            personaje.Afiliacion = Afiliacion; 
         }
      });
      res.json(personajes);
   } else {
      res.status(500).json({error: 'Hubo un error'});
   }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
     _.each(personajes, (personaje, i) => {
        if(personaje.id == id){
           personajes.splice(i, 1);
        }
     });
     res.send(personajes);

});

module.exports = router;