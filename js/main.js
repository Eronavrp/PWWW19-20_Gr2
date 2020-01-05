var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("SlideShow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "inline"; 
 
}
var myIndex = 0;
showDivs1();

function showDivs1() {
  var i;
  var x = document.getElementsByClassName("SlideShow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(showDivs1, 4000); // Change image every 2 seconds
}
 //pop up forma
$(window).on('load',function () {
  $(".forma").click(function(){
     $('.hover_bkgr_fricc').show();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
});
//form validation
function validateForm() {
  var x = [document.forms["form"]["name"],document.forms["form"]["email"],document.forms["form"]["room"]];
  var dat1=document.forms["form"]["data1"].value.split('/')
  var dat2=document.forms["form"]["data2"].value.split('/')
 console.log(dat1)
 if(dat1[0]>dat2[0] || ((dat2[0]=dat2[0])&& (dat1[1]>dat2[1])) || ((dat2[0]=dat2[0])&& (dat1[1]=dat2[1]) && (dat1[2]>dat2[2]))  ){
alert('Date is invalid')
 }

      if (x[0].value == "") {
        x[0].style.boxShadow='0 0 20px rgba(255,0,0,0.5)';
        x[0].focus();
        return false;
      }
      else{
        x[0].style.boxShadow='none';

      }
      if (x[1].value == "") {
        x[1].style.boxShadow='0 0 20px rgba(255,0,0,0.5)';
        x[1].focus();
        return false;
      }
      else{
        x[1].style.boxShadow='none';
      }
      if (x[2].selectedIndex<1) {
        x[2].style.boxShadow='0 0 20px rgba(255,0,0,0.5)';
        x[2].focus();
        return false;
      }
      else{
        x[2].style.boxShadow='none';
      }
}