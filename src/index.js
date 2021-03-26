import "./styles/index.scss"
import evaluate from "./scripts/evaluate"
import reset from "./scripts/reset"

reset()

const runButton = document.getElementById('run-button')
const resetButton = document.getElementById('reset-button')

document.addEventListener('keydown', (event)=>{
    if(event.key ==="Enter" && event.ctrlKey) return evaluate()
    if(event.key ==="Delete" && event.ctrlKey) return reset()
})
runButton.addEventListener('click', evaluate)
resetButton.addEventListener('click', () => reset())