var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
var sr=document.getElementById("hd");
sr.innerHTML="My Tasks For : "+today;
var listitems=document.getElementsByTagName("LI");
var i;
for (i=0; i<listitems.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listitems[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (i=0; i<close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}
function clicked(){
    var li=document.createElement("li");
    var data =document.getElementById("newitem").value;
    //console.log(data);
    var t =document.createTextNode(data);
    li.appendChild(t);
    document.getElementById("items").appendChild(li);
    var a=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    a.className="close";
    a.appendChild(txt);  
    li.append(a);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
}
}
