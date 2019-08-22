let arrayList = [
];

let i = 0;

function append(){
    let pushList = "";

    pushList = document.getElementById("appendTxt").value;
    pushList.trim();

    if(pushList === null  || pushList === "" || pushList === " "){
        alert("enter something");
    }
    else{
        arrayList.push(pushList.trim());
        var node = document.createElement("LI");
        var textnode = document.createTextNode(pushList + " Id: " + i);
        node.id = i;
        node.appendChild(textnode);
        document.getElementById("listClass").appendChild(node);
    }

    i++;

};