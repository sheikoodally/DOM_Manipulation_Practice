let arrayList = [];
LiId = 0;
let item = "";


function append(){

    item = document.getElementById("appendTxt").value;

    if(item === null  || item === "" || item === " "){
        alert("enter something");
    }
    else{

        arrayList.push(item.trim());
        var li = document.createElement("LI");
        var textnode = document.createTextNode(item);
        li.id = "liId";
        li.appendChild(textnode);
        document.getElementById("listClass").appendChild(li);
        LiId++;
    }
};

function deleteLi(){
    var ul = document.getElementById("listClass");
    var txt = document.getElementById("appendTxt");
    var liDel = document.getElementById("liId");
    var delItem = document.getElementById(txt.value);
    if (delItem == liDel){
        ul.removeChild(item);
    }
}

