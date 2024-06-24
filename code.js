

const tamanho = 4

const senha = (parseInt(Math.random()*10000)).toString()

const tentContent = document.getElementById("tentContent")




const menu = document.getElementById("tentsAnt")

const botaoMenu = document.getElementById("showMenu")
showMenu()

tentativas = []

function pegarValor(){
    let valor = document.getElementById("input").value

    if(!isNaN(valor)){

        while(valor.length < tamanho){
            valor = `0${valor}`
        }

        let certos = 0
        for(let c = 0; c < tamanho; c++){
            if(valor.toString().slice(c, c+1) == senha.slice(c, c+1)){
                certos++
            }
        }
        document.getElementById("corretos").innerHTML = `Há ${certos} corretos`
        tentativas.push(`${valor} = ${certos}`)
        writeTents()
    }
}



function showMenu(){
    if(menu.style.display == "block"){
        document.getElementById("tentsAnt").style.display = "none"
        botaoMenu.style.right = `${0}px`
        botaoMenu.innerText = "<-"
    }else{
        document.getElementById("tentsAnt").style.display = "block"
        botaoMenu.style.right = `${200}px`
        botaoMenu.innerText = "->"
    }
}

function writeTents(){
    tentContent.innerHTML = ""
    tentativas.forEach(element => {
        tentContent.innerHTML += `<div class="card">${element}</div>`
    });
}