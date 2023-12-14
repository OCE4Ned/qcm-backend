class Proposition{
    #id;
    #name;
    #isTrue;

    constructor(propositionToCreate)
    {
        this.#id = propositionToCreate.id;
        this.#name = propositionToCreate.name;
        this.#isTrue = propositionToCreate.isTrue;
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name
    }

    get isTrue(){
        return this.#isTrue;
    }
}

module.exports = Proposition;