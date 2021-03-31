import "./styles/index.scss"
import evaluate from "./scripts/evaluate"
import resetLevel from "./scripts/levels/resetLevel"
import currentLevel from "./scripts/levels/current_level"

let currentLevelNumber = 0
resetLevel(currentLevelNumber)

const nextLevelButton = document.getElementById('next-level-button')
const previousLevelButton = document.getElementById('previous-level-button')

const runButton = document.getElementById('run-button')
const resetButton = document.getElementById('reset-button')

document.addEventListener('keydown', (event)=>{
    if(event.key ==="Enter" && event.ctrlKey) return evaluate()
    if(event.key ==="Delete" && event.ctrlKey) return reset()
})
runButton.addEventListener('click', evaluate)
resetButton.addEventListener('click', () => resetLevel(currentLevelNumber))
nextLevelButton.addEventListener('click', () => {
    currentLevelNumber++
    currentLevel(currentLevelNumber, nextLevelButton, previousLevelButton)
})
previousLevelButton.addEventListener('click', () => {
    currentLevelNumber--
    currentLevel(currentLevelNumber, nextLevelButton, previousLevelButton)
})