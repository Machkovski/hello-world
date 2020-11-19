
//HOME
function dodaj(tuka) {
    document.getElementById("main").innerHTML=document.getElementById(tuka).innerHTML
}
//LIKES
function first() {
    for(var i=1; i<7;i++)
    {
        document.getElementById('dv'+i).innerHTML = localStorage.getItem('likes'+i); //Mozda treba del+i
    }
    var buttons=document.getElementsByClassName("galerija1");
    for(var b=0;b<buttons.length+1;b++)
    {
        buttons[b].style.background="url('img/prazno.png')";
    }
}

function likes(buttonID, divID, br) {
    var cValue= localStorage.getItem('likes'+br) ? parseInt(localStorage.getItem('likes'+br)) : 0;
    var nValue = cValue + 1;
    localStorage.setItem('likes'+br, nValue);
    document.getElementById(divID).innerHTML = localStorage.getItem('likes'+br);
    
    var buttons=document.getElementsByClassName("galerija1");
    buttons[br-1].style.background="url('img/full.png')";   
}
//COMMENT BAR
var kom_count = new Array();
for(i=0; i<6; i++){
    kom_count[i]=0;
}
function komentar(com, pt, count){
    var inputV=document.getElementById(com).value;
    var post=document.getElementById(pt).innerHTML;
    if(post == "")
    {
        post =inputV + "<br>" + "<p id='" + kom_count[count] + "' class='kelija'>" + "</p>";
    }
    else
    {
        post = post + inputV + "<br>" + "<p id='" + kom_count[count] + "' class='kelija'>" + "</p>";
    }
    post = post + "<input id='igraaj' type='text'>";
    post = post + "<input type='button' value='Одговори' onclick='reply(" + kom_count[count] + ")'><br>";
    kom_count[count] += 1;
    document.getElementById(pt).innerHTML=post;
}
//REPLY del
function reply(novreply) {
    var inputR = document.getElementById("igraaj").value;
    var postR = document.getElementById(novreply).innerHTML;
    if(postR == "")
    {
        postR = inputR;
    }
    else
    {
        postR = postR + inputR;
    }
    postR = "<p>" + postR + "</p>";
    document.getElementById(novreply).innerHTML=postR;
}

//SEARCH BAR
function search() {
    var ser = getElementsByTagName("input")[0].value;
    ser = "#" + ser;
    var pbr = getElementsByTagName("p");
    var proveri;
    var classEl = document.getElementsByClassName("nova");
    for(var i=0; i<=pbr.length;i++)
    {
        proveri=pbr[i].innerHTML;
        if(proveri.indexof(ser,0)==-1)
        {
            for(var j=0; j<6; j++)
            {
                classEl[j + (i*6)].style.display="none";
            }
        }
    }
}
