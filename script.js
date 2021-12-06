// accept cookies

function acceptCookies() {
    let accept = document.querySelector("#cookies")
    accept.remove()
}

// alert when city selected

function message() {
    let citySelect = document.querySelector(".city")
    citySelect = alert("Loading Weather Report...")
}

// change temp from CtoF and back

function celsiusToFahrenheit(temp) {
    return Math.round(9 / 5 * temp + 32)
}

function fahrenheitToCelsius(temp) {
    return Math.round(5 / 9 * (temp - 32))
}

function changeTemp(element) {
    console.log(element.value)
    for(let i=1; i<9; i++) {
        let tempSpan = document.querySelector("#temp" + i);
        let tempVal = parseInt(tempSpan.innerText)
        if(element.value == "°C") {
            tempSpan.innerText = fahrenheitToCelsius(tempVal)
        } else {
            tempSpan.innerText = celsiusToFahrenheit(tempVal)
        }
    }
}

// my original code. 


// let tempChangeHigh = document.querySelectorAll(".high")
// let tempChangeLow = document.querySelectorAll(".low")
// let tempHighF = ['75°', '80°', '69°', '78°']
// let tempLowF = ['65°', '66°', '61°', '70°']

// function changeTemp() {
//     for (let i = 0; i < tempChangeHigh.length; i++) {
//         console.log(document.querySelector('#temp-scale2'));
//         if (document.querySelector('#temp-scale2').value == "fahrenheit"){
//             tempChangeHigh[i].innerText = tempHighF[i]
//             tempChangeLow[i].innerText = tempLowF[i]    
//         } 
//         else if (document.querySelector('#temp-scale2').value == "celsius"){
//             location.reload()
//         }
//     }
// }

