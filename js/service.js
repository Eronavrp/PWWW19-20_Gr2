
function HideContent(obj) {
    for (var i = 1; i < obj.length; i++) {
        document.getElementById([obj[0]]).style.display = 'flex';
        document.getElementById([obj[i]]).style.display = 'none';

    }
}


function HideContent2(obj) {
  var i = 1;
  while(i < obj.length)
  {
    document.getElementById([obj[0]]).style.display = 'block';
    document.getElementById([obj[i]]).style.display = 'none';
      i=i+1;

  }
  
}

function HideContent1(obj) {
    
      if(  document.getElementById(obj).style.display == 'none')
      {document.getElementById(obj).style.display = 'block'}
      else
      {
        document.getElementById(obj).style.display = 'none';
      }    
    
}

// Filename: script.js
function myFunction() {
    var element = document.getElementById("map");
    var xdesiredPosition = 1000;
    var elmnt = document.getElementById("w1");
    var y = Number(elmnt.scrollHeight);
 
    
    if (window.pageYOffset >= xdesiredPosition) {
      
        element.style.cssText += "position: fixed; top: auto; bottom: 100px; right: 105px; left: auto;";
        if(y-window.pageYOffset<970){   element.style.cssText="position: fixed; top: auto; bottom: 800px; right: 105px; left: auto;";

      }
      
      }

    
    else {
      
        element.style.cssText += "position: relative; top: 40px; bottom: auto; right: auto; left: 100px;";
    }
    }
    function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }


    