var button = document.getElementsByClassName('submit-btn')[0]
var cont = document.getElementsByClassName('container')[0]

button.onclick = function() {
    if (document.getElementsByClassName('input-msg')[0].value == "")
    {
        cont.innerHTML = `
            <div class="container">
                <div class="main-title">A Message You Would Like to Pass</div>
                <input class="input-msg">
                <button class="submit-btn" type="button">Submit</button>
                <div class="warning">Please Enter A Value To Pass</div>
                <div class="last-msg-title">Last Message Delivered</div>
                <div class="last-msg-input">HELLO WORLD</div>
            </div>`
    }
    else {
        document.getElementsByClassName('last-msg-input')[0].innerHTML = document.getElementsByClassName('input-msg')[0].value.toUpperCase()
        document.getElementsByClassName('input-msg')[0].value = ""
    }
}