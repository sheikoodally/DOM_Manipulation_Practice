let arrayList = [
];

LiId = arrayList.length;

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
        var textnode = document.createTextNode(pushList);
        node.id = LiId;
        node.appendChild(textnode);
        document.getElementById("listClass").appendChild(node);
        LiId++;
    }
};

function deleteLi(){
    var el = document.getElementById("5");
    el.remove();
}
