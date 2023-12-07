const qcms = require('../models/inmemory.js');
const displayQcms = (req, res) => {

    res.render('qcms', {qcms:qcms});
};
const displayFormQcm= (req, res)=>{
    res.render('newqcm')
};
const createNewForm= (req, res)=>{
    console.log(req.body);
    res.redirect("/qcms");
};
module.exports = {displayQcms, displayFormQcm, createNewForm};