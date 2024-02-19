
import { setCopyElement } from "./click-copy.js"

export const getData = async (API_URL) => {
    setCopyElement()
    document.querySelector(".renger-image")?.classList.remove("copied")
    const btnForm = document.querySelector("#id-btn-form")
    btnForm.innerHTML = ""
    btnForm.classList.add("loading")
    fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar a imagem')
        }
        return response
    })
    .then(response => {
        const imageUrl = response.url
        setImageContainer(imageUrl)
    })
    .catch(error => {
        console.error('Erro na requisição:', error)
    })
    .finally(() => {
        btnForm.classList.remove("loading")
        btnForm.innerHTML = "Gerar"
    })
}

const setImageContainer = async (image, error = false) => {
    const containerRender = document.querySelector(".renger-image")
    containerRender.innerHTML = ''

    const renderImage = document.createElement("img")
    renderImage.setAttribute("id", "id-renger-image")
    renderImage.src = await image
    
    containerRender.append(renderImage)
}