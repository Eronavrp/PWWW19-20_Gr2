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

  function showNeeded(n)
  {
    if(n==1) {document.getElementById("foundHidden").style.display = "table-cell";}
    else if(n==0) {document.getElementById("foundHidden").style.display = "none";}
  }

  