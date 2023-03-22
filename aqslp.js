if ($(window).width() > 1199) {
  $('div.row.cback').removeClass('row');
  $('div.cl.collapse').removeClass('collapse')
}else{
  $('div.cback').addClass('row');
}

//Resize window
function resize() {
  if ($(window).width() > 1199) {
    $('div.row.cback').removeClass('row');
    $('div.cl.collapse').removeClass('collapse')
  }else{
    $('div.cback').addClass('row');
    $('div.cl').addClass('collapse')
  }
}

//watch window resize
$(window).on('resize', function() {
  resize()
});