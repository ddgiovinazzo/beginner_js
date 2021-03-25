import "./styles/index.scss"
import {cmEditor} from "./scripts/codeMirror"
import evaluate from "./scripts/evaluate"
import reset from "./scripts/reset"

reset(cmEditor)

const runButton = document.getElementById('run-button')
const resetButton = document.getElementById('reset-button')

cmEditor.setOption("extraKeys", {"Ctrl-Enter": evaluate});
runButton.addEventListener('click', evaluate)
resetButton.addEventListener('click', () => reset())