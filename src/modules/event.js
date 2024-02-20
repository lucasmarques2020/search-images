import { getData } from "./api2.js"
import { inputRules } from "./input.js"

const DOMElement = {
    btn: document.querySelector("button"),
    inputSearch: document.querySelector("#id-search"),
    inputWidth: document.querySelector("#id-width"),
    inputHeight: document.querySelector("#id-height"),
}

document.addEventListener('DOMContentLoaded', () => {
    const widthInput = document.getElementById('id-width')
    const heightInput = document.getElementById('id-height')

    widthInput.addEventListener('input', () => {
        inputRules(widthInput)
    })

    heightInput.addEventListener('input', () => {
        inputRules(heightInput);
    })
})

DOMElement.btn.addEventListener("click", async (e) => {
    const width = DOMElement.inputWidth.value == "" ? "1280" : DOMElement.inputWidth.value
    const height = DOMElement.inputHeight.value == "" ? "720" : DOMElement.inputHeight.value
    // const search = DOMElement.inputSearch.value == "" ? "erro" : DOMElement.inputSearch.value
    e.preventDefault()

    const API_URL = `https://picsum.photos/${width}/${height}.webp?random`
    await getData(API_URL)
});