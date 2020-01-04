var slideIndex = 1;
    
 var currentClicked = 0;
 var isClicked = false;



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
    if(n!=4)stories[n+slideIndex-1].className = "readMore";
    else stories[n+slideIndex-2].className = "readMore";
    document.getElementById("main").style.height = "1500px";
    
}
var current = "miniSlideShow";
var currentPlace;

var count = 0;
function showNextPicture(place,index)
{   
    
    
    
    resetColors(place);
    var pictures = [
        ["images/places/germia3.jpg","images/places/germia1.jpg","images/places/germia4.jpg","images/places/germia5.jpg"],
        ["images/places/kalaja1.jpg","images/places/kalaja7.jpg","images/places/kalaja4.jpg","images/places/kalaja6.jpg"],
        ["images/places/mirusha1.jpg","images/places/mirusha2.jpg","images/places/mirusha7.jpg","images/places/mirusha6.jpg"],
        ["images/places/drini6.jpg","images/places/drini3.jpg","images/places/drini2.jpg","images/places/drini7.jpg"],
        ["images/places/gadime1.jpg","images/places/gadime2.jpg","images/places/gadime3.jpg","images/places/gadime4.jpg"],
        ["images/places/brezovica1.jpg","images/places/brezovica5.jpg","images/places/brezovica3.jpg","images/places/brezovica4.jpg"],
        ["images/places/rugova1.jpg","images/places/rugova7.jpg","images/places/rugova3.jpg","images/places/rugova6.jpg"],
        ["images/places/prevalla4.jpg","images/places/prevalla5.jpg","images/places/prevalla1.jpg","images/places/prevalla3.jpg"],
        
    ];
    
    
    if(current == "shrink") { var s = document.getElementsByClassName("shrink"); current = "miniSlideShow";}
    else { var s = document.getElementsByClassName("miniSlideShow"); current = "shrink";}
    currentPlace = place;
    var d = document.getElementsByClassName("dot");
    d[index+(place*4)].className = "dot blueDot";
    
    document.getElementById("V").innerHTML = current + " " +index + " " + s.length;
    
    s[place].src = pictures[place][index];
    if(current=="miniSlideShow") switchAll(s,"miniSlideShow")
    else switchAll(s,"shrink");
    

    //d[index+(place*4)].style.backgroundColor = "#0D153C";
    
    
    
}

function switchAll(array,str)
{
    var arr = array;
    for(i = 0; i<array.length; i++)
    {
        arr[i].className = str;
    }
    for(i = array.length; i<8; i++)
    {
        arr[i] = (array[i-array.length].className = str);
    }
    return arr;
}


function restore(array,str)
{
    var arr = array;
    for(i = 0; i<array.length; i++)
    {
        arr[i].className = str;
    }
    for(i = array.length; i<8; i++)
    {
        arr[i] = (array[i-array.length].className = str);
    }
    return arr;
}

function copyArray(a,i)
{
    for(k=i; k<i+4; k++)
    {
        s[k].className = a;
    }
    return s;
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