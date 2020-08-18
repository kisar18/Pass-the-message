var button = document.getElementsByClassName('submit-btn')[0]
var cont = document.getElementsByClassName('container')[0]
var warn = document.getElementsByClassName('warning')[0]

button.onclick = function() {
    var inputField = document.getElementsByClassName('input-msg')[0]
    var lastMessage = document.getElementsByClassName('last-msg-input')[0]

    if (inputField.value === "") {
        warn.style.display = "block"
        setTimeout(function() {warn.style.display = "none"},3000)
    }
    else {
        lastMessage.innerHTML = inputField.value.toUpperCase()
        inputField.value = ""
    }
}