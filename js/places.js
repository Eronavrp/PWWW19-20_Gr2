var slideIndex = 1;
    
 var currentClicked = 0;
 var isClicked = false;

function plusDivs(n) {
    
    
    
  showDivs(n);
  

}

function showDivs(n) 
{
    var divs = document.getElementsByClassName("images");

    
    //document.getElementById("V").innerHTML = currentClicked + " " + slideIndex;
    if (slideIndex+n > divs.length-4 && n>0) {   n=0;}
    else if (slideIndex+n < 1 && n<0) {n=0; }
  
    if(n!=0 )
    {
        
        
        slideIndex = slideIndex + n;
        if(currentClicked+n!=5) { if(isClicked) {if(n>0) showStory(currentClicked); if(n<0) showStory(currentClicked);} }
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
    resetSize();
    expand(n);
    //document.getElementById("V").innerHTML += " " +currentClicked;
    if(n==4) {showDivs(1);resetSize(); expand(3);}
    var stories = document.getElementsByClassName("readMore");
    for( i = 0; i< stories.length; i++){
        stories[i].className = "readMore hidden";
    }
    stories[n+slideIndex-1].className = "readMore";
    
    document.getElementById("main").style.height = "1500px";
    
}

function showNextPicture(place,index)
{   
    resetColors(place);
    var pictures = [
        ["images/a1.jpg","images/a2.jpg","images/a3.jpg","images/a4.jpg"],
        ["images/a5.jpg","images/a6.jpg","images/a7.jpg","images/a8.jpg"],
        ["images/a9.jpg","images/a10.jpg","images/a11.jpg","images/a12.jpg"]];
    var s = document.getElementsByClassName("miniSlideShow");
    
    var d = document.getElementsByClassName("dot");
    
    s[place].src = pictures[place][index];
    
    //d[index+(place*4)].style.backgroundColor = "#0D153C";
    d[index+(place*4)].className = "dot blueDot";
    
    
}

function resetColors(c)
{
    var d = document.getElementsByClassName("blueDot");
    //d[c].style.backgroundColor = "#E2CBA0";
    d[c].className = "dot";
    
}

function expand(index)
{
    currentClicked = index;
    isClicked = true;
    var x=document.getElementsByClassName("images");
    x[index].className = "images expanded";
    
}

function resetSize()
{
    var a = document.getElementsByClassName("images");
    
    for(i = 0; i<a.length;i++)
    {
        a[i].className = "images";
    }
}


/*$(document).ready(function(){
       $('#fff').click(
             function(){
                 $('.images').slideDown();
             });
            });*/