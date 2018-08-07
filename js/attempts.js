//type = null string

//null string
var actualDate = $('#formAddDate').text()

//null string
var actualDate = $('#formAddDate').html()

// /main.js:25 Uncaught TypeError: document.getElementById(...).innerHTML is not a function
//     at DisplayValidatedDate._handleDisplay (main.js:25)
//     at HTMLInputElement.proxy (jquery.js:10268)
//     at HTMLDocument.dispatch (jquery.js:5183)
//     at HTMLDocument.elemData.handle (jquery.js:4991)
var actualDate = document.getElementById('formAddDate').innerHTML()

// /main.js:25 Uncaught TypeError: document.getElementById(...).innerText is not a function
//     at DisplayValidatedDate._handleDisplay (main.js:25)
//     at HTMLInputElement.proxy (jquery.js:10268)
//     at HTMLDocument.dispatch (jquery.js:5183)
//     at HTMLDocument.elemData.handle (jquery.js:4991)
var actualDate = document.getElementById('formAddDate').innerText()

//null string
var actualDate = document.getElementById('formAddDate').value

//undefined
var date_input = document.getElementById('formAddDate')
var actualDate = document.getSelection().selectAllChildren( date_input.parentElement )

//nothing written in form
var actualDate = document.getElementById('dateForm')

// TODO: investigate the badInput attribute of validity (inside form inside element 0 inside source element)
