import {cmEditor, cmConsole} from "./codeMirror"


const reset = () =>{
    const defaultValue = 'console.log("Hey Developers!")'
    cmEditor.setValue(defaultValue)

    cmConsole.setValue("")
}

export default reset