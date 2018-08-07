//
var DisplayValidatedDate = function(){

};

DisplayValidatedDate.prototype.init = function() {
  this._bindEvents();
}

DisplayValidatedDate.prototype._bindEvents = function () {
  // Attatch date input to output
$(document).on('click', '#formSubmit', $.proxy(this._handleDisplay, this));
}

DisplayValidatedDate.prototype._handleDisplay = function (e) {
  e.preventDefault()
  console.log("I'm triggered!");
  var date = $('#formAddDate').val();
  console.log(date);
  console.log('type:')
  console.log(typeof date);
  if(this._bootstrapBasicValidation(date)) {
    $('#dateInsert').html(date);
    console.log(date.isValid());
  } else {
    console.log("Please enter a valid date")
    var date_input = document.getElementById('formAddDate')
    var actualDate = event
    console.log(actualDate);
    console.log(typeof actualDate)

  }

}

DisplayValidatedDate.prototype._bootstrapBasicValidation = function () {
  var form = document.getElementsByClassName('needs-validation')[0]
  if (form.checkValidity() === false) {
    console.log('Not valid');
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else {
    return true;
  }

};

DisplayValidatedDate.prototype.isValidDate = function (date) {
  return true
};



// if ($('form').val() !== 0)

// var serializedInput = $('form').serializeArray();


// // from MDN docs https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
// var email = document.getElementById("mail");
//
// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I expect an e-mail, darling!");
//   } else {
//     email.setCustomValidity("");
//   }
// })
// .setCustonValidity()  Adds a custom error message to the element; if you set a custom error message, the element is considered to be invalid, and the specified error is displayed. This lets you use JavaScript code to establish a validation failure other than those offered by the standard constraint validation API. The message is shown to the user when reporting the problem.
//
// If the argument is the empty string, the custom error is cleared.

$(function(){
  window.gDisplayValidatedDate = new DisplayValidatedDate();
  window.gDisplayValidatedDate.init();
});
