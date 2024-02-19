import { getData } from "./api2.js"

const DOMElement = {
    btn: document.querySelector("button"),
    inputSearch: document.querySelector("#id-search"),
    inputWidth: document.querySelector("#id-width"),
    inputHeight: document.querySelector("#id-height"),
}

DOMElement.btn.addEventListener("click", async (e) => {
    const width = DOMElement.inputWidth.value == "" ? "1280" : DOMElement.inputWidth.value
    const height = DOMElement.inputHeight.value == "" ? "720" : DOMElement.inputHeight.value
    const search = DOMElement.inputSearch.value == "" ? "erro" : DOMElement.inputSearch.value
    e.preventDefault()

    const API_URL = `https://picsum.photos/${width}/${height}?${search}`
    await getData(API_URL)
});