import {cmConsole} from "./codeMirror"
import levels from "./levels/levels"
import removeResults from "./removeResults"

const checkAnswer = (currentLevelNumber) =>{
    const {[currentLevelNumber]: {answer}} = levels
    const output = cmConsole.getValue("/n")

    if(currentLevelNumber > 0 ){
        const result = document.createElement("p")
        const resultsContainer = document.getElementById("results-container")
        removeResults()
        if(output === answer){
            result.classList.add("correct")
            result.innerHTML = "Success! You Got It!"
        }
        else{
            result.classList.add("incorrect")
            result.innerHTML = "Not The Right Output. Try Again."
        }
        resultsContainer.appendChild(result)
    } 
}

export default checkAnswer