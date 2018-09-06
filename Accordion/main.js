$(".accordion").on("myevent", function(event, collapseQueryObject){
  var currentContent = collapseQueryObject.find('.collapse__content');
  $(".collapse__content").not(currentContent).slideUp('3s');
  
  collapseQueryObject.find('.collapse__head').css('border-radius', currentContent.is(':visible') ? '5px' : '0');
  currentContent.slideToggle(300);
  
});

$(".collapse__head").click(function() {
  let self = $(this);
  let selfParent = self.parent();
  $('#list').val(selfParent.index() + 1);
  $(this).trigger('myevent', [selfParent]);
})

$('#list').change(function(){
  var index = $(this).val();
  var query = '.collapse:nth-child('+index+')';
  var panel = $(query);
  $(".accordion").trigger('myevent', [panel]);
})