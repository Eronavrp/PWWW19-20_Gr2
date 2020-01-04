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

