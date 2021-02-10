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
  autoCloseBrackets: true
})

editor.setOption("extraKeys", {
  "Shift-Enter": () => { }
});


const cm = document.getElementsByClassName("CodeMirror")[0]


const buttonDown = (e) => {
  if (e.keyCode === 13 && e.shiftKey) {
    button.classList.add("button-down")
    checker()
  }
}

const buttonUp = (e) => {
  button.classList.remove("button-down")
}

const checker = () => {

  const output = document.getElementById('output-box')
  const question = document.getElementById('question-box')
  const button = document.getElementById('button')
  
  try {
    eval(editor.getValue("\n"))
  }
  
  catch (error) {
    output.innerHTML = error
    output.classList.remove("correct")
    output.classList.add("incorrect")
  }
  const value = `${eval(editor.getValue("\n"))}`
  output.innerHTML = value

  if (value === question.innerHTML) {
    output.classList.add("correct")
    output.classList.remove("incorrect")

    button.classList.add("button-correct")
    button.classList.remove("button-incorrect")
    button.innerHTML = "Correct!"

  } else {
    output.classList.add("incorrect")
    button.classList.remove("button-correct")
    button.classList.add("button-incorrect")
    button.innerHTML = "Try Again."
  }

}

button.addEventListener('click', checker)
cm.addEventListener('keydown', buttonDown)
cm.addEventListener('keyup', buttonUp)