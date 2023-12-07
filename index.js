const express = require('express');

// Base
const {
    welcomeMessage,
    welcomeMessageFunction,
    testEjsView
} = require("./controllers/welcome");

// QCM
const {
    displayQcms,
    displayFormQcm,
    createNewForm
} = require("./controllers/qcms");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

// Base
app.get('/', welcomeMessage);
app.get('/welcome2', welcomeMessageFunction);
app.get('/testejs', testEjsView);

// QCMS
app.get('/qcms', displayQcms);
app.get('/qcms/new', displayFormQcm);
app.post('/qcms/new', createNewForm);

app.listen(port, ()=> {
    console.log(`Ecoute sur http://localhost:${port}`);
});