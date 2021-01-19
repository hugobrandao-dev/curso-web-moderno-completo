// Esse exemplo é o thisEBind2 refeito
function Pessoa() {
    this.idade = 0

    /**
     * A arrow function não varia de acordo com quem está chamando.
     */
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 2000)
}

new Pessoa