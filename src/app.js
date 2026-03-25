/*
* File: app.js
* Author: Magyar Márk
* Copyright: 2026, Magyar Márk
* Group: Szoft I/N
* Date: 2026-03-25
* Github: https://github.com/DexTher22/tomtestin
* Licenc: MIT 
*/


import calculate from "./calcBmi.js"

const form = document.querySelector('#form')
const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')
const bmiIndex = document.querySelector('#bmiIndex')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    calcIndex()
})

function calcIndex() {
    const weight = Number(weightInput.value)
    const height = Number(heightInput.value)
    const result = calculate(weight,height)
    bmiIndex.value = result
}