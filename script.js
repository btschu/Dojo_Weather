// accept cookies

let accept = document.querySelector("#cookies")

function acceptCookies() {
    accept.remove()
}

// alert when city selected

let citySelect = document.querySelector(".city")

function message() {
    citySelect = alert("Loading Weather Report...")
}

// change temp from CtoF and back

let tempChangeHigh = document.querySelectorAll(".high")
let tempChangeLow = document.querySelectorAll(".low")
let tempHighF = ['75°', '80°', '69°', '78°']
let tempLowF = ['65°', '66°', '61°', '70°']

function changeTemp() {
    for (let i = 0; i < tempChangeHigh.length; i++) {
        console.log(document.querySelector('#temp-scale2'));
        if (document.querySelector('#temp-scale2').value == "fahrenheit"){
            tempChangeHigh[i].innerText = tempHighF[i]
            tempChangeLow[i].innerText = tempLowF[i]    
        } 
        else if (document.querySelector('#temp-scale2').value == "celsius"){
            location.reload()
        }
    }
}   

