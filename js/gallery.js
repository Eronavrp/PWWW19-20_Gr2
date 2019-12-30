
$(document).ready(function(){
    $('.card img').hover(
        function(){
            $(this).attr('temp', $(this).attr('src'));
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $(this).attr('temp'));
           })
            $('#btn2').click(function(){
                $('#gallery2').fadeIn(3000)
            })
            $('#btn3').click(function(){
                $('#gallery3').fadeIn(3000)
            })
            $('#btn4').click(function(){
                $('#gallery4').fadeIn(3000)
            })
      }
     )  
