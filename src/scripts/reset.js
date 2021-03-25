import {cmEditor, cmConsole} from "./codeMirror"


const reset = () =>{
    const defaultValue = 'console.log("Hello World!")'
    cmEditor.setValue(defaultValue)

    cmConsole.setValue("")
}

export default reset