export const setCopyElement = () => {
    
    document.querySelector(".renger-image").addEventListener("click", (e) => {
        if(document.querySelector(".copied")) {
            document.querySelector(".renger-image").classList.add("copied-again")
        }
        const imagemSrc = document.querySelector("#id-renger-image")
        const textCopy = imagemSrc.src
        copyElement(textCopy)
        
        document.querySelector(".renger-image").classList.add("copied")
    })

}
const copyElement = (textCopy) => {
    let textarea = document.createElement('textarea');
    textarea.value = textCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}