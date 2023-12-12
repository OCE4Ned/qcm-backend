const Qcm = require('./qcm');

qcms = [
    new Qcm({id: 0, name:'Introduction Vanilla JS',subject:'javascript', nbpoints :20}),
    new Qcm({id: 1, name:'Framework Frontend',subject:'javascript', nbpoints :20}),
    new Qcm({id: 2, name:'Angular',subject:'javascript', nbpoints :20}),
];

const newQcm = (body)=>{
    body.id = incrementId();
    qcms.push(new Qcm(body));
}

function incrementId(){
    return qcms.length;
}

module.exports = {qcms, newQcm};