$('.ui.secondary.pointing.menu')
.on('click', '.item', function(e) {
  if(!$(this).hasClass('dropdown')) {
    $(this)
      .addClass('active')
      .siblings('.item')
        .removeClass('active');
    localStorage.setItem('activeItem', $(e.target).attr('href'));
  }
});

$(document).ready(function(){
  var activeTab = localStorage.getItem('activeItem');
    if(activeTab){      
      $($('#'+activeTab.split("/")[2])).addClass('active')
      .siblings('.item')
        .removeClass('active');
    }
});