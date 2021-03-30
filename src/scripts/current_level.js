const currentLevel = (currentLevelNumber, nextLevelButton, previousLevelButton) => {
    const previousLevel  = document.getElementById(`level-${currentLevelNumber-1}`)
    const currentLevel  = document.getElementById(`level-${currentLevelNumber}`)
    const nextLevel  = document.getElementById(`level-${currentLevelNumber+1}`)

    if(previousLevel) previousLevel.classList.add("level-hidden")
    if(nextLevel) nextLevel.classList.add("level-hidden")
    currentLevel.classList.remove("level-hidden")

    const style = previousLevelButton.style
    if(!style.display) style.display ="inherit"
    if(!currentLevelNumber) if(style.display) style.display = ""
}

export default currentLevel