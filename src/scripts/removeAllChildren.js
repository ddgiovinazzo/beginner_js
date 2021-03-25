const removeAllChildren = (parent) => {
    parent.classList.remove("incorrect")
    while (parent.firstChild) parent.removeChild(parent.firstChild);
}

export default removeAllChildren