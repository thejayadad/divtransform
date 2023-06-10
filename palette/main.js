
const container= document.querySelector(".container")
const button = document.querySelector(".btn")

const maxPaletteBoxes = 5
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value")

    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied"
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to Copy"))
}


const generatePalette = () => {
    container.innerHTML ="";
    for (let i = 0; i < maxPaletteBoxes;i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`

        const color = document.createElement("div")
        color.classList.add("color")
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}">
        </div>
       <span class="hex-value">${randomHex}</span>
        `

        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color)
    }


}

button.addEventListener("click", generatePalette)


generatePalette();