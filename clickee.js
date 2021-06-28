console.log("in clickee.js")
buttonClick = function (event) {
    console.log(event)
}

b1_clickee = async function (event) {
    let x1 = await (await fetch("https://danielruss.github.io/codingsystems/soc_2010_complete.json")).json()
    console.table(x1)
    return x1
}

window.addEventListener("load", (event) => {
    document.getElementById("button1").addEventListener("click", b1_clickee)
    document.getElementById("button2").addEventListener("click", buttonClick)
    document.getElementById("button3").addEventListener("click", buttonClick)
})