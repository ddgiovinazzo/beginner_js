const removeResults= () =>{
    const resultsContainer = document.getElementById("results-container")
    while (resultsContainer.firstChild) 
    resultsContainer.removeChild(resultsContainer.firstChild)
}

export default removeResults