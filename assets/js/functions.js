$('.ui.secondary.pointing.menu')
  .on('click', '.item', function (e) {
    if (!$(this).hasClass('dropdown') && !$(this).hasClass('search')) {
      $(this)
        .addClass('active')
        .siblings('.item')
        .removeClass('active');
      localStorage.setItem('activeItem', $(e.target).attr('href'));
    }
  });


$(document).ready(function () {
  var activeTab = localStorage.getItem('activeItem');
  if (activeTab) {
    if ($(location).attr('href').includes(activeTab)) {
      $($('#' + activeTab.split("/")[2])).addClass('active')
        .siblings('.item')
        .removeClass('active');
    }
  }

  $.getJSON('/search.json', function (data) {
    localStorage.setItem('data', JSON.stringify(data));
  });

});

$('#buscar')
  .on('click',function (e) {
    console.log($("#busqueda").val());
    window.location = "http://localhost:4000/search/"+$("#busqueda").val();
  });