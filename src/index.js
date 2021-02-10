import "./styles/index.scss";
import CodeMirror from "../codemirror/lib/codemirror"
import "../codemirror/mode/javascript/javascript"
import "../codemirror/addon/edit/closebrackets"

const button = document.getElementById('button')
const answer = document.getElementById('typing-box')
answer.value = ''
const editor = CodeMirror.fromTextArea(answer, {
  mode: 'javascript',
  theme: 'paraiso-light',
  autoCloseBrackets: true})


const checker = ()=>{
  const question = document.getElementById('question-box')
  const value = `${eval(editor.getValue("\n"))}`
  const output = document.getElementById('output-box')
  const button = document.getElementById('button')

  output.innerHTML = `Output: ${value}`

  if (value === question.innerHTML){
    question.classList.add("correct")
    question.classList.remove("incorrect")

    button.classList.add("button-correct")
    button.classList.remove("button-incorrect")
    button.innerHTML = "Correct!"

  }else{
    question.classList.add("incorrect")
    button.classList.add("button-incorrect")
    button.innerHTML = "Try Again."

  }
}

button.addEventListener('click', checker)