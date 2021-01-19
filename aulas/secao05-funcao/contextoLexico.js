const variavel = "Global"

function mostrarContexto() {
    console.log(variavel)
}

function contextoLocal() {
    const variavel = "Local"
    mostrarContexto()
}

contextoLocal()