
var a=1 
change(1);
function change(n){
    const gall=[document.getElementById('gallery1'),
    document.getElementById('gallery2'),
    document.getElementById('gallery3'),
    document.getElementById('gallery4')]

    const btn=[document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3'),
    document.getElementById('btn4')]

for(var i =0;i<4;i++)
{
    gall[i].style.display='none'
    btn[i].style.color="dimgray"
    btn[i].style.backgroundColor="white"
}
// if(n==1)
// {gall[0].style.display="block";
// btn[0].style.color="white"
// btn[0].style.backgroundColor="darkblue"}
// else if(n==2)
//     {
//     btn[1].style.color="white"
//     btn[1].style.backgroundColor="darkblue"}
//     else if(n==3)
//    {
//     btn[2].style.color="white"
//     btn[2].style.backgroundColor="darkblue"}
//         else 
//        {
//         btn[3].style.color="white"
//         btn[3].style.backgroundColor="darkblue"}
switch(n){
    case 1:
        gall[0].style.display="block";
        btn[0].style.color="white";
        btn[0].style.backgroundColor="darkblue";
        break;
    case 2:
        btn[1].style.color="white";
        btn[1].style.backgroundColor="darkblue";
        break;
    case 3:
        btn[2].style.color="white";
        btn[2].style.backgroundColor="darkblue";
        break;
    case 4:
        btn[3].style.color="white";
        btn[3].style.backgroundColor="darkblue";
        break;
}


}