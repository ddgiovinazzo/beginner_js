const currentLevel = (currentLevelNumber, nextLevelButton, previousLevelButton) => {
    const previousLevel  = document.getElementById(`level-${currentLevelNumber-1}`)
    const currentLevel  = document.getElementById(`level-${currentLevelNumber}`)
    const nextLevel  = document.getElementById(`level-${currentLevelNumber+1}`)

    if(previousLevel) previousLevel.classList.add("level-hidden")
    if(nextLevel) nextLevel.classList.add("level-hidden")
    currentLevel.classList.remove("level-hidden")

    const previousStyle = previousLevelButton.style
    const nextStyle = nextLevelButton.style
    if(previousLevel && !previousStyle.display) previousStyle.display ="inherit"
    if(nextLevel && nextStyle.display === "none") nextStyle.display ="inherit"
    if(!previousLevel) previousStyle.display = ""
    if(!nextLevel) nextStyle.display = "none"
}

export default currentLevel