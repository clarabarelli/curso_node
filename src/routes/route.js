const {Router} = require('express');
const router = Router(); //este router va a ser una instancia del enrutador de express
const userRoutes = require('./user.routes');

const init = () => {
    //aca van todas las rutas
    router.use('/users', userRoutes); //userRoutes se encarga de hacer el enrutamiento en ese path
    return router;
};

module.exports = { init };