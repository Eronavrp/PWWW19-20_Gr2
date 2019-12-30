var slideIndex = 1;
    
 

function plusDivs(n) {
    
    
    
  showDivs(n);
  

}

function showDivs(n) 
{
    var divs = document.getElementsByClassName("images");
    
    if (slideIndex+n > divs.length-5 && n>0   ) {n=0; }
    else if (slideIndex+n < 1 && n<0) {n=0; }
  
    if(n!=0 )
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
        if(n>0) {divs[divs.length-1].innerHTML = temp;}
        else if(n<0) divs[0].innerHTML = temp;
    }
}

function showStory(n)
{
    var stories = document.getElementsByClassName("readMore");
    for( i = 0; i< stories.length; i++){
        stories[i].className = "readMore hidden";
    }
    stories[n].className = "readMore";
    document.getElementById("main").style.height = "1300px";
}

function showNextPicture(place,index)
{
    var pictures = [
        ["images/a1.jpg","images/a2.jpg","images/a3.jpg","images/a4.jpg"],
        ["images/a5.jpg","images/a6.jpg","images/a7.jpg","images/a8.jpg"],
        ["images/a9.jpg","images/a10.jpg","images/a11.jpg","images/a12.jpg"]];
    var s = document.getElementsByClassName("miniSlideShow");
    s[place].src = pictures[place][index];
    
    
}