import CodeMirror from "../../codemirror-5.59.2/lib/codemirror"
import "../../codemirror-5.59.2/mode/javascript/javascript"
import "../../codemirror-5.59.2/addon/edit/closebrackets"

const editor = document.getElementById('cm-editor')
const console = document.getElementById('cm-console')

export const cmEditor = CodeMirror.fromTextArea(editor, {
  mode: 'javascript',
  theme: 'darcula',
  autoCloseBrackets: true,
  lineNumbers: true,
  gutter: true,
})
export const cmConsole = CodeMirror.fromTextArea(console, {
  mode: 'javascript',
  theme: 'darcula-console',
  readOnly: true,
  autoCloseBrackets: true,
  lineNumbers: true,
  autofocus: false,
  cursorBlinkRate: 0,
  lineNumberFormatter: ()=> ">"
})
