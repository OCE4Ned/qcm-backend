const {qcms, newQcm} = require('../models/inmemory');

const displayQcms = (req, res) => {

    res.render('qcms', {qcms:qcms});
};
const displayFormQcm= (req, res)=>{
    res.render('newqcm')
};
const createNewForm= (req, res)=>{
    console.log(req.body);
    const qcm = newQcm(req.body);
    res.redirect("/qcms/"+qcm.id);
};

const displayQcmJson = (req,res)=>{
    res.json({qcms});
};

const displayQcmDetailed = (req, res)=>{
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id);
    res.render('qcm', {qcm});
}

module.exports = {displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed};