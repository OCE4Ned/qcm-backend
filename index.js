const express = require('express');
// Application express
const app = express();

// Import des routers
const routerWelcome = require('./routers/route');
const routerQcm = require('./routers/qcmroute');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

const port = 3000;

// Assoccier des routes a l'application
app.use(routerWelcome);
// Association
app.use('/qcms', routerQcm);

app.listen(port, ()=> {
    console.log(`Ecoute sur http://localhost:${port}`);
});