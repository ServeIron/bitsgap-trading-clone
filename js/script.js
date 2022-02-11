// orta kısım
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



// sağ kısım
var order_limit = document.getElementById("order-limit");
var order_market = document.getElementById("order-market");
var order_stop = document.getElementById("order-stop");

var order_limit_box = document.getElementById("order-limit-box");
var order_limit_profit = document.getElementById("order-limit-profit");

var market_limit_box = document.getElementById("market-limit-box");
var market_limit_profit = document.getElementById("market-limit-profit");

var stop_limit_box = document.getElementById("stop-limit-box");
var stop_limit_profit = document.getElementById("stop-limit-profit");

order_limit.addEventListener("click", e => {

    classChange(order_limit,transactionMenuActive,"add");
    classChange(order_market,transactionMenuActive);
    classChange(order_stop,transactionMenuActive);

    displayChange(order_limit_box,"display","flex");
    displayChange(order_limit_profit,"display","flex");

    displayChange(market_limit_box,"display","none");
    displayChange(market_limit_profit,"display","none");
    displayChange(stop_limit_box,"display","none");
    displayChange(stop_limit_profit,"display","none");
});


order_market.addEventListener("click", e => {

    classChange(order_limit,transactionMenuActive);
    classChange(order_market,transactionMenuActive,"add");
    classChange(order_stop,transactionMenuActive);
    
    displayChange(order_limit_box,"display","none");
    displayChange(order_limit_profit,"display","none");

    displayChange(market_limit_box,"display","flex");
    displayChange(market_limit_profit,"display","flex");
    displayChange(stop_limit_box,"display","none");
    displayChange(stop_limit_profit,"display","none");
});

order_stop.addEventListener("click", e => {

    classChange(order_limit,transactionMenuActive);
    classChange(order_market,transactionMenuActive);
    classChange(order_stop,transactionMenuActive,"add");
    
    displayChange(order_limit_box,"display","none");
    displayChange(order_limit_profit,"display","none");

    displayChange(market_limit_box,"display","none");
    displayChange(market_limit_profit,"display","none");
    displayChange(stop_limit_box,"display","flex");
    displayChange(stop_limit_profit,"display","flex");
});

var profit_title = document.getElementById("profit_title");
var profit_content = document.getElementById("profit_content");

var stoplos_title = document.getElementById("stoplos_title");
var stoplos_content = document.getElementById("stoplos_content");

var tariligntake_title = document.getElementById("tariligntake_title");
var tariligntake_content = document.getElementById("tariligntake_content");

profit_title.addEventListener("click", e => {
  if(profit_title.checked == true){
    displayChange(profit_content,"display","flex");
  }else {
    displayChange(profit_content,"display","none");
  }
});

stoplos_title.addEventListener("click", e => {
    if(stoplos_title.checked == true){
      displayChange(stoplos_content,"display","flex");
    }else {
      displayChange(stoplos_content,"display","none");
    }
  });

  tariligntake_title.addEventListener("click", e => {
    if(tariligntake_title.checked == true){
      displayChange(tariligntake_content,"display","flex");
    }else {
      displayChange(tariligntake_content,"display","none");
    }
  });
  
  var right_info_content = document.getElementById("right_info_content");
  var right_info_close = document.getElementById("right_info_close");
  var right_info_open = document.getElementById("right_info_open");

  right_info_open.addEventListener("click", e => {
      displayChange(right_info_content,'display','flex');
  });
  
  right_info_close.addEventListener("click", e => {
    displayChange(right_info_content,'display','none');
});


var limit_buy = document.getElementById("limit_buy");
var limit_sell = document.getElementById("limit_sell");

var oneButonActive = "content-buton-one-active";
var twoButonActive = "content-buton-two-active";

var oneMiddleButon = "content-one-middle-button";
var twoMiddleButon = "content-two-middle-button";

limit_buy.addEventListener("click", e => {
  classChange(limit_buy,twoMiddleButon);
    classChange(limit_buy,oneMiddleButon);
    classChange(limit_buy,oneButonActive,"add");
  
    classChange(limit_sell,twoButonActive);
    classChange(limit_sell,twoMiddleButon);
});

limit_sell.addEventListener("click", e => {
   //    alert("tıklandı");
    classChange(limit_sell,oneMiddleButon);
    classChange(limit_sell,twoButonActive,"add");

    classChange(limit_buy,twoButonActive);
    classChange(limit_buy,twoMiddleButon,"add");
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