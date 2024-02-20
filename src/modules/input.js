export const inputRules = (input) => {
    input.value = input.value.replace(/\D/g, '');
    let valor = parseInt(input.value)

    if (valor < parseInt(input.min)) {
        input.value = input.min
    } else if (valor > parseInt(input.max)) {
        input.value = input.max
    }
}