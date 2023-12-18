const Qcm = require('./qcm');
const Question = require('./question');
const Proposition = require('./proposition');

const qcms = [
    new Qcm({
        id: 0,
        name:'Introduction Vanilla JS',
        subject:'javascript',
        nbpoints :20,
        questions: [
            new Question({
                id:0,
                name:'Comment déclare t-on une variable en javascript?',
                proposition_list: [
                    new Proposition({
                        id:0,
                        name:'let variable',
                        isTrue:'True'
                    }),
                    new Proposition({
                        id:1,
                        name:'var variable',
                        isTrue:'True'
                    })
                ]
            }),
            new Question({
                id:1,
                name:'Comment déclare t-on une variable en javascript?',
                proposition_list: [
                    new Proposition({
                        id:0,
                        name:'let variable',
                        isTrue:'True'
                    }),
                    new Proposition({
                        id:1,
                        name:'var variable',
                        isTrue:'True'
                    })
                ]
            }),
        ]
    }),
    new Qcm({
        id: 1,
        name:'Framework Frontend',
        subject:'javascript',
        nbpoints :20,
        questions: [
            new Question({
                id:0,
                name:'Comment déclare t-on une variable en javascript?',
                proposition_list: [
                    new Proposition({
                        id:0,
                        name:'let variable',
                        isTrue:'True'
                    }),
                    new Proposition({
                        id:1,
                        name:'var variable',
                        isTrue:'True'
                    })
                ]
            }),
            new Question({
                id:1,
                name:'Comment déclare t-on une variable en javascript?',
                proposition_list: [
                    new Proposition({
                        id:0,
                        name:'let variable',
                        isTrue:'True'
                    }),
                    new Proposition({
                        id:1,
                        name:'var variable',
                        isTrue:'True'
                    })
                ]
            }),
        ]
    }),
    new Qcm({
        id: 2,
        name:'Angular',
        subject:'javascript',
        nbpoints :20,
        questions: [
            new Question({
                id:0,
                name:'Comment déclare t-on une variable en javascript?',
                proposition_list: [
                    new Proposition({
                        id:0,
                        name:'let variable',
                        isTrue:'True'
                    }),
                    new Proposition({
                        id:1,
                        name:'var variable',
                        isTrue:'True'
                    })
                ]
            }),
            new Question({
                id:1,
                name:'Comment déclare t-on une variable en javascript?',
                proposition_list: [
                    new Proposition({
                        id:0,
                        name:'let variable',
                        isTrue:'True'
                    }),
                    new Proposition({
                        id:1,
                        name:'var variable',
                        isTrue:'True'
                    })
                ]
            }),
        ]
    }),
];

const newQcm = (rawObject) => {
    // creation du QCM avec l id max
    const qcm = new Qcm(
        {
            id: getMaxId() + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints),
            questions : qcmQuestions(rawObject)
        });
    // ajout du QCM a la liste
    qcms.push(qcm);
    return qcm;
}

const qcmQuestions = (rawObject) =>{
    let questions = [];
    let questionId = 0;
    for(let question in rawObject.questions)
    {
        const questionCreated = new Question(
            {
                id: questionId,
                name: rawObject.questions[question],
                proposition_list: questionPropositions(rawObject, questionId)
            });
        questionId++;
        questions.push(questionCreated);
    }
    return questions;
}

const questionPropositions = (rawObject, questionId) =>{
    let propositions = [];
    let propositionId = 0;
    for(let proposition in rawObject.proposition[questionId])
    {
        const propositionCreated = new Proposition(
            {
                id: propositionId,
                name: rawObject.proposition[questionId][proposition],
                isTrue : rawObject.goodAnswers[questionId][propositionId]
            });
        propositionId++;
        propositions.push(propositionCreated);
    }
    return propositions;
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