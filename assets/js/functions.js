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
      console.log($('.item a[href="' + activeTab + '"]'))
        $('.item a[href="' + activeTab + '"]').addClass('active');
    }
});