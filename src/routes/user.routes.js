const router = require('express').Router();

router.get('/user/:name', (req, res) => {//cuando le pegue a / se ejecuta la funcion
    const {name} = req.params.name;
    res.send("Bienvenido " + name);
});
router.post('/user/:name', (req, res) => {//cuando le pegue a / se ejecuta la funcion
    const {name} = req.params.name;
    res.send("Bienvenido al servidor " + name);
});

module.exports= router;