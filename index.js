let root = document.documentElement
let htmlbutton = document.getElementById("htmltarjet")
let cssbutton = document.getElementById("css")
let jsbutton= document.getElementById("javascript")
htmlbutton.addEventListener("click", ()=> {backgroundChanger("#F06529", "#FFFFD8")})
cssbutton.addEventListener("click", ()=> {backgroundChanger("lightblue","#769ECB")})
jsbutton.addEventListener("click", ()=> {backgroundChanger("#ffc300", "#FEFD97")})

function backgroundChanger(colorFondo, colorAcento){
    if(root.style.getPropertyValue("--color-fondo")===colorFondo){
        root.style.setProperty("--color-fondo","#8da290")
        root.style.setProperty("--color-acento", "#fcf1d8")
    }
    else{
        document.documentElement.style.setProperty("--color-fondo", colorFondo);
        document.documentElement.style.setProperty("--color-acento", colorAcento);
    }
    console.log("Funciona")
}