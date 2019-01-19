/*
nodename              name of node( most time tag name)
nodeValue             value of node
parentNode            node up from this node in hierachy
childNodes            an array of nodes that are one level below hierachy
firstChild            first node child
lastChild             last node lastChild
previousSibling       returns previous node on the same level (its Sibling)
nextSibling           return next node on the same level (its Sibling)
attributes            an array of attributes
                     attributes[index].nodeValue returns value of attribute
                     it's better to use getAttribute=("nameOfAttributeToGetValueFrom")
textContent           text content of element
innerHTML             text content with tags

setAttribute("nameOfAttributeToAdd", "value of attribute");
removeAttribute("nameOfAttributeToRemove");

*/
// JS DOM

var x = document.getElementById("ojtprogrammer").childNodes[3].nextSibling;
alert(x);



//sam2
// var x = document.getElementById("ojtprogrammer").childNodes[3].firstChild.nodeValue;
// alert(x);
//sample 1
// var x = document.getElementById("ojtprogrammer");
// x.setAttribute("class","test");
// x.removeAttribute("class");

// alert(x);