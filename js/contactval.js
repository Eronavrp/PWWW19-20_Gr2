function isBlank(inputField)
{
    if(inputField.value==""){
        return true;
    }
    return false;
}

function makeClean(element)
{
    element.classList.remove("error");
}

window.addEventListener("load", function(){
    var requiredInputs = document.querySelectorAll(".required");
    for (var i =0; i<requiredInputs.length; i++)
    {
        requiredInputs[i].addEventListener("change", function(e){
            makeClean(e.target);
        });
    }
    var mainForm = document.getElementById("form2");
    mainForm.addEventListener("submit", function(e){
    
    var requiredInputs = document.querySelectorAll(".required");
    for (var i =0; i<requiredInputs.length; i++)
    {
        if(isBlank(requiredInputs[i]))
        {
            e.preventDefault();
            requiredInputs[i].classList.add("error");
        }
        else
        {
            makeClean(requiredInputs[i]);
        }
    } 
    });
});