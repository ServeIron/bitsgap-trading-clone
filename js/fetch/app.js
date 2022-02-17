const book = new BOOK();
const ui = new UI();

setInterval(function () {getBook()}, 1000);
function getBook(){
 book.getOrder().then( response=> { 
     ui.createBook(response.deepthResponsive);
     ui.createTrades(response.bookResponsive);
    }).catch(error => {console.log("hata",error)})
}
getBook()
var buy_buton = document.getElementById("buy_buton");
var normal_buton = document.getElementById("normal_buton");
var sell_buton = document.getElementById("sell_buton");

var order_sell = document.getElementById("order_sell");
var order_buy = document.getElementById("order_buy");

var visible_order = "visible-order";
var un_visible_order = "unvisible-order";
var visib_order = "visib-order";

buy_buton.addEventListener('click', e => {

    classChange(order_buy,visib_order);
    classChange(order_buy,un_visible_order);
    classChange(order_buy,visible_order,"add");

    classChange(order_sell,un_visible_order,"add");
});

sell_buton.addEventListener('click', e => {
  
    classChange(order_sell,visib_order);
    classChange(order_sell,un_visible_order);
    classChange(order_sell,visible_order,"add");

    classChange(order_buy,un_visible_order,"add");
 });

 normal_buton.addEventListener('click', e => {
  
    classChange(order_sell,visible_order);   
    classChange(order_buy,un_visible_order);

    classChange(order_sell,visib_order,"add");
    classChange(order_buy,visib_order,"add");
 });


 function classChange(doc,name,type = "remove"){
    if(type == "remove"){
        doc.classList.remove(name);
    } else {
        doc.classList.add(name);
    }
}