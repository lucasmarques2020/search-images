import { setCopyElement } from "./click-copy.js"

const API_KEY = "GYFmZHTSP1CZip0yTt2KQ9EsRjR7QK0TIJdrMq6JkeF8bXTzZnzZVDbd"
const API_URL = `https://api.pexels.com/v1/`

const ObjDataFetch = {
    method: "GET",
    headers: {
        Accept: "application/json",
        Authorization: API_KEY
    },
};

export const getData = async ({ queryFilters }) => {
    const filter = queryFilters;
    const URL_FINALY = API_URL + filter;
    setCopyElement()
    document.querySelector(".renger-image")?.classList.remove("copied")

    try {
        const response = await fetch(URL_FINALY, ObjDataFetch);
        if (!response.ok) {
            const srcImageError = "/src/assets/img/erros-em-sites.webp"
            setImageContainer(srcImageError, true)
            throw new Error(`Erro ao realizar a requisição: ${response.statusText}`);
        }

        const data = await response.json();

        if(data.photos == "") {
            const srcImageError = "/src/assets/img/erros-em-sites.webp"
            setImageContainer(srcImageError, true)
        }

        const typeSize = "large"
        const newData = data.photos.find(async (obj) => {
            if (typeSize == "landscape") {
                if(obj.src.landscape) {
                    setImageContainer(obj.src.landscape)
                }
            } else if (typeSize == "large") {
                if(obj.src.large) {
                    setImageContainer(obj.src.large)
                }    
            } else if (typeSize == "large2x") {
                if(obj.src.large2x) {
                    setImageContainer(obj.src.large2x)
                }    
            } else if (typeSize == "medium") {
                if(obj.src.medium) {
                    setImageContainer(obj.src.medium)
                }    
            } else if (typeSize == "original") {
                if(obj.src.original) {
                    setImageContainer(obj.src.original)
                }    
            } else if (typeSize == "portrait") {
                if(obj.src.portrait) {
                    setImageContainer(obj.src.portrait)
                }    
            } else if (typeSize == "small") {
                if(obj.src.small) {
                    setImageContainer(obj.src.small)
                }    
            } else if (typeSize == "tiny") {
                if(obj.src.tiny) {
                    setImageContainer(obj.src.tiny)
                }    
            }
        })

        newData()
    } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error);
        throw error;
    }
}

const setImageContainer = async (image, error = false) => {
    const containerRender = document.querySelector(".renger-image")
    containerRender.innerHTML = ''

    const renderImage = document.createElement("img")
    renderImage.setAttribute("id", "id-renger-image")
    renderImage.src = await image
    
    containerRender.append(renderImage)
}