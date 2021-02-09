import "./styles/index.scss";


const button = document.getElementById('button')
const answer = document.getElementById('typing-box')
answer.value = ''

function wait(ms) {
  return new Promise(response => setTimeout(response, ms));
}

answer.addEventListener('keydown', (e)=>{
  if(e.keyCode === 13){ 
    e.preventDefault()
    wait(250).then(()=>{
      button.classList.remove('button-enter')
    })
    button.classList.add('button-enter')
    button.click()
    
  }
})


const checker = ()=>{
  const question = document.getElementById('question-box')

  if (answer.value === question.innerHTML){
    question.innerHTML = "YAY!"
  }else{
    console.log(question.innerHTML)
    console.log(answer.value)

  }
}

button.addEventListener('click', checker)








