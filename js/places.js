var slideIndex = 1;
    
 

function plusDivs(n) {
    
    
    
  showDivs(n);
  

}

function showDivs(n) 
{
    var divs = document.getElementsByClassName("images");
    
    if (slideIndex+n > divs.length-5 && n>0   ) {n=0; }
    else if (slideIndex+n < 1 && n<0) {n=0; }
  
    if(n!=0)
    {
        slideIndex = slideIndex + n;
        var temp;
        if(n>0) temp = divs[0].innerHTML;
        else if(n<0) temp = divs[divs.length-1].innerHTML;
        for (i = 0; i < divs.length-1; i++) 
        {
            if(n<0) {   divs[divs.length-(i+1)].innerHTML = divs[divs.length-(i+2)].innerHTML;   }
            else if(n>0) divs[i].innerHTML = divs[i+1].innerHTML;
        }
        if(n>0) divs[divs.length-1].innerHTML = temp;
        else if(n<0) divs[0].innerHTML = temp;
    }
}
