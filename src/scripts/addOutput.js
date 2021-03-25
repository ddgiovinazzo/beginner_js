const addOutput = (messages, cmConsole) => {
    let output = ""

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        if(i != messages.length -1 ) output += `~ ${message}\n`
        else output += `~ ${message}`
    }

    cmConsole.setValue(output)
}

export default addOutput