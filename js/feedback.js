  function selectChanged()
  {
    
    var lists = ["","European","American","African","Asian","Australian"];

    var selectMenu = document.getElementById("selectContinent");

    if(selectMenu.value!=0) 
    {
        var x = document.getElementById("hidden");
        x.style.display = "table-cell";
        document.getElementById("states").setAttribute('colspan',1);
        document.getElementById("country").setAttribute('list',lists[selectMenu.value]);
    }
    else{
        document.getElementById("hidden").style.display = "none";
        document.getElementById("states").setAttribute('colspan',2);
    }
  }

  function showReason(n)
  {
    if(n==0) {document.getElementById("reasonHidden").style.display = "table-cell";}
    else if(n==1) {document.getElementById("reasonHidden").style.display = "none";}
  }


  
  /*VALIDATION*/
  function isBlank(inputField){
    if (inputField.value=="") {
        return true;
    }
    return false;
}

function removeErrors(element){
  element.classList.remove("error");		
}


function validate()
{
  var proceed = true;
  
  //document.getElementById("V").innerHTML = date;
  var requiredInputs = document.getElementsByClassName("required");
  for(i = 0; i<requiredInputs.length; i++)
  {
        if(isBlank(requiredInputs[i])) {
          
          requiredInputs[i].classList.add("error");
          proceed = false;
        }

        else {
          if(requiredInputs[i].id=="selectContinent")
          {
            if(requiredInputs[i].value==0){requiredInputs[i].classList.add("error"); proceed=false; continue;} 
          }
          removeErrors(requiredInputs[i]);
      }
      //var x = getElementById("selectContinent");
      //if(x.value  == 0) {x.classList.add("error");}
   }

   var currentDate = new Date().getTime();
  var date = new Date(document.getElementById("date").value + ' 00:00').getTime();
  if(currentDate<date) {window.alert("Date is invalid. Please insert an older date to proceed"); proceed = false;}

  var x = document.getElementById("telephone");

  if(!isBlank(x))if(!correctFormat()) {proceed=false; x.classList.add("error");window.alert("Please follow the correct format of the telephone element");}
   return proceed;
}

function correctFormat()
{
   var answer = true;
   
   var tokens = document.getElementById("telephone").value.split(" ");
   //document.getElementById("V").innerHTML = " " + tokens[2];
   if(tokens[0].length!=5 || tokens[0][0]!='(' || tokens[0][4]!=')'){return false;}
   if(tokens[1].length!=2){return false;}
   if(tokens[2].length!=6){return false;}
   //document.getElementById("V").innerHTML = " " + answer; 
   var code = 383;  var typedCode;
   
   try { typedCode = parseInt(tokens[0].substring(1,5)); if(code !=typedCode) {answer = false;}}
   catch(e){ answer = false;}
   document.getElementById("V").innerHTML = " " + answer;

   try {typedCode = parseInt(tokens[1]+"");}
   catch(e) {answer = false;}
   //document.getElementById("V").innerHTML += " " + answer;

   try {typedCode = parseInt(tokens[2]);}
   catch(e){answer = false;}
   //document.getElementById("V").innerHTML += " " + answer;

   return answer;

   

}

window.addEventListener("load", function() {    

  var requiredInputs = document.getElementsByClassName("required");
   for(i = 0; i<requiredInputs.length; i++)
   {
        requiredInputs[i].addEventListener("focus",function(e){
          removeErrors(e.target);
        }); }
  // add listeners for classes with hilightable ... 
  var hilightableInputs = document.getElementsByClassName("highlightable");
  for (var i=0; i < hilightableInputs.length; i++) {
      hilightableInputs[i].addEventListener("focus", function(e) {
          e.target.classList.toggle("highlight");	
      });
      hilightableInputs[i].addEventListener("blur", function(e) {
          e.target.classList.toggle("highlight");
      });
  }
})