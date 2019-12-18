 // Add active class to the current button (highlight it)
 // active tabs on the resume sec
        var header = document.getElementById("myDIV");
        var btns = header.getElementsByClassName("divone");
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("maindiv");
            current[0].className = current[0].className.replace(" maindiv", "");
            this.className += " maindiv";
          });
        }




  var divArray = $('.divone');
    var activeDiv = $('.maindiv');
    var leftButton = $('.leftButton');
    var rightButton = $('.rightButton');

    leftButton.on('click', function(e){
        e.preventDefault();
        var theArray = Array.from(divArray);
        theArray.forEach(function(div, index){
            
            if($(div).hasClass('maindiv')){
                var current = $(div);
                current.removeClass('maindiv');
                current.prev().addClass('maindiv');
                
             }
         });
    

    });

    rightButton.on('click', function(e){
        e.preventDefault();

           var all_classes = $('.maindiv').attr('class');

          var current = document.getElementsByClassName("maindiv");
          current[0].className = current[0].className.replace("maindiv", "");
          
          substring = "item";
          var getItem = all_classes.substring(all_classes.indexOf(substring));
          var getItem_index = parseInt(getItem.substring(4));
          var div_name = '.item'+(parseInt(getItem_index) + 1);
          console.log(div_name);
          $(div_name).addClass('maindiv');
        
    });





// slick slider

    $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});


 $('.autoplay').slick({
            dots: true,
            infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        });



// tabs active




          function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();