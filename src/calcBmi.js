/*
* File: calcBmi.js
* Author: Magyar Márk
* Copyright: 2026, Magyar Márk
* Group: Szoft V
* Date: 2026-03-25
* Github: https://github.com/DexTher22/tomtestin
* Licenc: MIT 
*/

function calculate(weight, height) {

    const result = weight / (Math.pow((height /100),2))
    return result
}

export default calculate