export const showEdit = () => {
    rootElement.querySelector("#editText").classList.remove("editText")
    rootElement.querySelector("#save").classList.remove("save")
    rootElement.querySelector("#editText").classList.add("editTextClick")
    rootElement.querySelector("#save").classList.add("saveClick")
}

export const showSave = () => {
    rootElement.querySelector("#editText").classList.add("editText")
    rootElement.querySelector("#save").classList.add("save")
}