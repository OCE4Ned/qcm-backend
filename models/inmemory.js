const Qcm = require('./qcm');
const Question = require('./question');
const Proposition = require('./proposition');

const qcms = [
    new Qcm({id: 0, name:'Introduction Vanilla JS',subject:'javascript', nbpoints :20}),
    new Qcm({id: 1, name:'Framework Frontend',subject:'javascript', nbpoints :20}),
    new Qcm({id: 2, name:'Angular',subject:'javascript', nbpoints :20}),
];

const newQcm = (rawObject) => {

    // creation du QCM avec l id max
    const qcm = new Qcm(
        {
            id: getMaxId() + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints)
        });
    // ajout du QCM a la liste
    qcms.push(qcm);
    return qcm;
}

const newQuestion = (questionToCreate) =>{
    const question = new Question(
        {
            id: getMaxId()+1,
            name: questionToCreate.name
        });

    return question;
}

const newProposition = (body) =>{
    const proposition = new Proposition(
        {
            id: getMaxId()+1,
            name: body.name,
            isTrue: body.isTrue
        });

    return proposition;
}

function getMaxId(){
    let maxId = 0;
    //recupere l'id le plus grand
    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });
    return maxId;
}

module.exports = {qcms, newQcm};