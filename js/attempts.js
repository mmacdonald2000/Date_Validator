// Attempts to get the invalid date out of the input.  Result is first in comment followed by method.  Everything was inserted in the _handleDisplay function after the else

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

// <!--Date-->
//      <div class="form-group">
//        <label for="formAddDate">Publication Date</label>
//        <input type="date" id="formAddDate" class="form-control" name="addDate" required="" valueasnumber="">
//        <div class="invalid-feedback">
//          Please provide a date of publication (MM/DD/YYYY).
//        </div>
//      </div>
//      <!--Submit-->
//      <div class="form-group">
//        <input type="submit" value="Submit Date" id="formSubmit" class="form-control">
//      </div>
var actualDate = $('#dateForm').html()

// Publication Date
//    Please provide a date of publication (MM/DD/YYYY).
var actualDate = $('#dateForm').text()

//added valueAsNumber to input w/ .text(), .html(), and .value
//result is null string
var actualDate = document.getElementById('formAddDate').value

//null string
$('#formAddDate').attr('type', 'text')
console.log('transformed');
var actualDate = $('#formAddDate').text()

//nothing in storage, null string
var actualDate = document.getElementById('formAddDate').value
localStorage.setItem('date', JSON.stringify(actualDate))

//null string
var serializedForm = $('#dateForm').serializeArray();
console.log(serializedForm)


/*--------------------------------------------------------------*/

// investigate the badInput attribute of validity

var check = document.getElementById('formAddDate').validity.valid;
console.log("valid: " + check);
var check1 = document.getElementById('formAddDate').validity.patternMismatch;
console.log("patternMismatch: " + check1);
var check2 = document.getElementById('formAddDate').validity.rangeOverflow;
console.log("rangeOverflow: " + check2);
var check3 = document.getElementById('formAddDate').validity.rangeUnderflow;
console.log("rangeUnderflow: " + check3);
var check4 = document.getElementById('formAddDate').validity.typeMismatch;
console.log("typeMismatch: " + check4);
var check5 = document.getElementById('formAddDate').validity.badInput;
console.log("badInput: " + check5);

//above with nothing returns:
valid: false
patternMismatch: false
rangeOverflow: false
rangeUnderflow: false
typeMismatch: false
badInput: false

//above with 2/31/2009 and 1/dd/2018 returns:
valid: false
patternMismatch: false
rangeOverflow: false
rangeUnderflow: false
typeMismatch: false
badInput: true

//above with 1/1/2018 returns:
valid: true
patternMismatch: false
rangeOverflow: false
rangeUnderflow: false
typeMismatch: false
badInput: false
