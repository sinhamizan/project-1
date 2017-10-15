  $(document).ready(function(){
  $('.header-menu').slicknav();
    $(".slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 2000,
      paginationSpeed : 2000,
      singleItem:true,
      autoPlay: true,  
       items : 2, 
       paginationNumbers: false,
       navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: true,
      itemsMobile : true
 
  });
  
  
  $(".client_slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 2000,
      paginationSpeed : 2000,
      singleItem:true,
      autoPlay: true,  
       items : 2, 
       paginationNumbers: false,
       navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: true,
      itemsMobile : true
 
  });
  
  
});



  