const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const story = require('../samplehistoria.json');

router.get('/', (req, res) => {
   res.json(story);
});

router.post('/', (req, res) => {
    const {Trama, Data}= req.body;
    if(Trama && Data){
        const id = Historia.length + 1;
        const nuevahistoria = {...req.body, id};
        console.log(nuevahistoria);
        res.json("Esta esta re buena capo");
        historia.push(nuevahistoria);
        res.json(Historia);
    } else {
        res.stauts(500).json({error :"no es muy bueno..."});
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {Trama, Data} = req.body;
    if(Trama && Data) {
       _.each(historias, (Historia, i) => {
          if(Historia.id == id){
             Historia.Trama = Trama;
             Historia.Data = Data;
          }
       });
       res.json(historias);
    } else {
       res.status(500).json({error: 'Hay error'});
    } 
 });

 router.delete('/:id', (req, res) => {
    const {id} = req.params;
      _.each(historias, (Historia, i) => {
         if(Historia.id == id) {
            historias.splice(i, 1);
         }
      });
      res.send(historias);
 });

module.exports = router;
