function HideContent(obj) {
    for (var i = 1; i < obj.length; i++) {
        document.getElementById([obj[0]]).style.display = 'flex';
        document.getElementById([obj[i]]).style.display = 'none';

    }
}
function HideContent2(obj) {
    for (var i = 1; i < obj.length; i++) {
        document.getElementById([obj[0]]).style.display = 'block';
        document.getElementById([obj[i]]).style.display = 'none';
  
    }
  } 

function myFunction()
{
    HideContent(['service3','service2','service1','service4','service5','service6']);
    HideContent2(['prite','sunii','suni','sunnyhill','ulpiana','Nightlife','rugova','kosova','doku']);
    
}