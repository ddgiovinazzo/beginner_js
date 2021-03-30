import {cmEditor, cmConsole} from "./codeMirror"
import formatByType from "./formatByType"
import addOutput from "./addOutput"

const messages = []

console = (function (devConsole){
    return {
      logOneArg(arg){
        devConsole.log(arg)
        const formattedArgument = formatByType(arg)
        messages.push(formattedArgument)
      },
      logManyArgs(args){
        const formattedArgs = []
        args.forEach(arg => formattedArgs.push(formatByType(arg)))
        messages.push(formattedArgs)
        devConsole.log.apply(devConsole, args)
      },
      
      log(text) {
        let argsArray = Array.from(arguments)

          return argsArray.length === 1 ? this.logOneArg(text) : this.logManyArgs(argsArray)
        },
      
        info(text) { devConsole.info(text) },
      
        warn(text) { devConsole.warn(text) },
      
        error(error) {
          devConsole.error(error)
          messages.push(error)
        }
      }
  })(window.console)

const evaluate = () => {
    messages.length = 0
    try {
      if(cmConsole.getOption("theme") === "darcula-console-erros") 
      cmConsole.setOption("theme", "darcula-console")
      
      cmConsole.setValue("")
      new Function(cmEditor.getValue("\n"))()
    }
    
    catch (error) {
      if(cmConsole.getOption("theme") === "darcula-console") 
      cmConsole.setOption("theme", "darcula-console-errors")
      console.error(error)
    }
    

    addOutput(messages, cmConsole)
  
  }

export default evaluate