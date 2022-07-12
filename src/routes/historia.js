const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const story = require('../samplehistoria.json');

router.get('/', (req, res) => {
   res.json(story);
});

router.post('/', (req, res) => {
    const {Historia, Data}= req.body;
    if(Historia && Data){
        const id = historia.length + 1;
        const nuevahistoria = {...req.body};
        console.log(nuevahistoria);
        res.json("Esta esta re buena capo");
        historia.push(nuevahistoria);
        res.json(historia);
    } else {
        res.stauts(500).json({error :"no es muy bueno..."});
    }
});


module.exports = router;
