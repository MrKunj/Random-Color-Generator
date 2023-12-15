// creating Random hax color code using JavaScript, on button click
const container = document.querySelector(".container")
const refreshbtn = document.querySelector(".refresh-btn")

const maxTimeRandom = 32;

const generateRandomCode = () =>{

    container.innerHTML = "" // cleaning the container. 
    for(let i=0; i<maxTimeRandom; i++)
    {
        // generating a random hax color combination
        let randomhax = Math.floor(Math.random() * 0xffffff).toString(16)
        randomhax = `#${randomhax.padStart(6, "0")}`
        console.log(randomhax)

        // creating a new line 'li' element and inserting it to a container.
        const color = document.createElement("li")
        color.classList.add("color")
        color.innerHTML = `<div class="rect-box" style="background: ${randomhax}"></div>
                           <span class="hax-value">${randomhax}</span>`
        
        color.addEventListener("click", () => copyColor(color, randomhax))
        
        container.appendChild(color)
    }
}
generateRandomCode()

const copyColor = (elem, haxvalue) =>{
    const colorElement = elem.querySelector(".hex-value")
    navigator.clipboard.writeText(haxvalue).then(()=>{
        colorElement.innerHTML = "Copied"; 
        setTimeout(() => colorElement.innerHTML = haxvalue, 1000)
    })
}

refreshbtn.addEventListener("click", generateRandomCode);
