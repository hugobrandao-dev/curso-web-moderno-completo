function Pessoa() {
    this.idade = 0

    // let self = this
    setInterval(function() {
        this.idade++
        console.log(this.idade)
        /**
         * O this do bind abaixo está se referindo já ao contexto de
         * Pessoa. Ao invés do this podemos colocar o self
         * (descomentar a linha do self). VER O ARROWFUNCTION.JS
         */
    }.bind(this), 2000)
}

new Pessoa