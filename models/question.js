class Question{
    #id;
    #name;
    #proposition_list;

    constructor(questionToCreate)
    {
        this.#id = questionToCreate.id;
        this.#name = questionToCreate.name;
        this.#proposition_list = questionToCreate.proposition_list;
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name
    }

    get proposition_list(){
        return this.#proposition_list;
    }
}

module.exports = Question;