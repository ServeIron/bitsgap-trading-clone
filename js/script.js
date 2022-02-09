var orderTitle = document.getElementById("orderTitle");
var positionTitle = document.getElementById("positionTitle");
var orderHistoryTitle = document.getElementById("orderHistoryTitle");

var orderType = document.getElementById("orderType");
var orderUl = document.getElementById("orderUl");

var ordeIcon = document.getElementById("ordeIcon");
var ordeIconTwo = document.getElementById("ordeIconTwo");

var transactionMenuActive = "transaction-bottom-menu-active";

var transactOpen = document.getElementById("transact-opened");
var transactPosit = document.getElementById("transact-posisition");
var transactOrder = document.getElementById("transact-ordered");


orderTitle.addEventListener('click', e => {
    classChange(orderTitle,transactionMenuActive,"add");
    classChange(positionTitle,transactionMenuActive);        
    classChange(orderHistoryTitle,transactionMenuActive); 

    displayChange(orderType,"display","inline-flex");

    displayChange(transactOpen,"display","block");
    displayChange(transactPosit,"display","none");
    displayChange(transactOrder,"display","none");
});
positionTitle.addEventListener('click', e => {
    classChange(orderTitle,transactionMenuActive);
    classChange(positionTitle,transactionMenuActive,"add");        
    classChange(orderHistoryTitle,transactionMenuActive); 
    displayChange(orderType,"display","none");

    displayChange(transactOpen,"display","none");
    displayChange(transactPosit,"display","block");
    displayChange(transactOrder,"display","none");
});
orderHistoryTitle.addEventListener('click', e => {
    classChange(orderTitle,transactionMenuActive);
    classChange(positionTitle,transactionMenuActive);        
    classChange(orderHistoryTitle,transactionMenuActive,"add"); 
    displayChange(orderType,"display","none");

    displayChange(transactOpen,"display","none");
    displayChange(transactPosit,"display","none");
    displayChange(transactOrder,"display","block");
});
orderType.addEventListener('click', e => {
    if(orderUl.style.display == "none") {
    displayChange(orderUl,"display","block");
    displayChange(ordeIcon,"display","none");
    displayChange(ordeIconTwo,"display","block");
    } else {
        displayChange(orderUl,"display","none");
        displayChange(ordeIcon,"display","block");
        displayChange(ordeIconTwo,"display","none");
    }
});


function classChange(doc,name,type = "remove"){
    if(type == "remove"){
        doc.classList.remove(name);
    } else {
        doc.classList.add(name);
    }
}
function displayChange(doc,property,value){
   doc.style.setProperty(property, value, "important");

}
