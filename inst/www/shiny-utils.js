
// Custom message for shiny


// enable/disble an input
Shiny.addCustomMessageHandler('toggleInput',
  function(data) {
    $('#' + data.id).prop('disabled', !data.enable);
    if ($('#' + data.id).hasClass('selectpicker')) {
      $('#' + data.id).selectpicker('refresh');
    }
  }
);

// hide or show an element
Shiny.addCustomMessageHandler('toggleDisplay',
  function(data) {
    $('#' + data.id).css('display', data.display);
  }
);


// Disable / enable a button
Shiny.addCustomMessageHandler('togglewidget', function(data) {
  if (data.type == 'disable') {
    $('#' + data.inputId).prop('disabled', true);
    $('#' + data.inputId).addClass('disabled');
  }
  if (data.type == 'enable') {
    $('#' + data.inputId).prop('disabled', false);
    $('#' + data.inputId).removeClass('disabled');
  }
});

