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
  console.log("I'm triggered!");
  var date = $('#formAddDate').val();
  console.log(date);
  if(this.isValidDate(date)) {
    $('#dateInsert').html(date);
  } else {
    console.log("Please enter a valid date")
  }

  e.preventDefault()
}
DisplayValidatedDate.prototype.isValidDate = function (date) {
  return false
};



// if ($('form').val() !== 0)

// var serializedInput = $('form').serializeArray();

$(function(){
  window.gDisplayValidatedDate = new DisplayValidatedDate();
  window.gDisplayValidatedDate.init();
});
