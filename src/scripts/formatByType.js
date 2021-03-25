const formatByType = (argument) => {
    if(typeof argument === "string") return `"${argument}"`
    if(typeof argument === "object" && Array.isArray(argument)) return formatArray(argument)
    if(typeof argument === "object" && argument != null ) return Object(formatObject(argument))
    if(typeof argument === "object" && argument === null ) return "null"
    else return argument
}

const  formatObject = (object) =>{
    let str = '{'
    const keys = Object.keys(object)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const value = object[key]

      str += `${key}: ${formatByType(value)}`
      if(i != keys.length-1 ) str += ', '
    }
    str += '}'
    return str
  }

const  formatArray = (array) =>{
    let str = '['
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      str += `${formatByType(element)}`
      if(i != array.length-1 ) str += ', '
    }
    str += ']'
    return str
  }

export default formatByType