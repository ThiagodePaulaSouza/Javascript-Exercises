function imprimirDado(dado) {
    console.log(dado());
}

imprimirDado(function () {
    return "Bom dia"
})