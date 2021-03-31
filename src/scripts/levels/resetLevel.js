import {cmEditor, cmConsole} from "../codeMirror"
import levels from "./levels"


const resetLevel = (currentLevelNumber) =>{
    const {[currentLevelNumber]: {defaultValue}} = levels
    cmEditor.setValue(defaultValue)

    cmConsole.setValue("")
}

export default resetLevel