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
  // console.log("I'm triggered!");

  if(this._isValidDate(date)) {
    var date = $('#formAddDate').val();
    $('#dateInsert').html(date);
    // console.log(date);
  }
}

DisplayValidatedDate.prototype._isValidDate = function () {
  var form = $('.needs-validation')
  form.addClass('was-validated');
  if (form.get(0).checkValidity() === false) {
    // console.log('Not valid');
    var checkInput = document.getElementById('formAddDate').validity.badInput;
    if(checkInput){
      $('.invalid-feedback').empty().text('Please re-enter the date in mm-dd-yyyy format')
    } else {
      $('.invalid-feedback').empty().text('Please enter a date.')
    }
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else {
    return true;
  }

};


$(function(){
  window.gDisplayValidatedDate = new DisplayValidatedDate();
  window.gDisplayValidatedDate.init();
});
