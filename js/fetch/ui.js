class UI{
    constructor(){
        this.order_book_bids = document.getElementById("order_book_bids");
        this.order_book_asks = document.getElementById("order_book_asks");
        this.order_sell = document.getElementById("order_sell");
        this.order_buy = document.getElementById("order_buy");
    }

     createBook(object) {
      
       this.order_book_bids.innerHTML = " ";
       this.order_book_asks.innerHTML = " ";
     
       object.bids.forEach((element,index) => {
          const contentDiv = document.createElement('div');    

          const inDiv1 = document.createElement('div');
          const inDiv2 = document.createElement('div');  

          inDiv1.innerHTML = element[1].substring(0,7);
          inDiv2.innerHTML = element[0].substring(0,8);
          contentDiv.appendChild(inDiv1);
          contentDiv.appendChild(inDiv2);
  
          this.order_book_bids.appendChild(contentDiv);  
         
        });

        object.asks.forEach((element,index) => {
            const contentDiv = document.createElement('div');    
  
            const inDiv1 = document.createElement('div');
            const inDiv2 = document.createElement('div');  
  
            inDiv1.innerHTML = element[0].substring(0,7);
            inDiv2.innerHTML = element[1].substring(0,8);
            contentDiv.appendChild(inDiv1);
            contentDiv.appendChild(inDiv2);
    
            this.order_book_asks.appendChild(contentDiv);  
           
          });
    }
    createTrades(object){
      this.order_sell.innerHTML = " ";
      this.order_buy.innerHTML = " ";
      object.forEach((element,index) => {
       if(element.isBuyerMaker == true && element.isBestMatch == true){
        const contentDiv = document.createElement('div');    

        const inDiv1 = document.createElement('div');
        const inDiv2 = document.createElement('div');  
        const inDiv3 = document.createElement('div');  

        contentDiv.classList.add("order-book-list-in");

        inDiv1.innerHTML = element.price.substring(0,7);
        inDiv2.innerHTML = element.qty.substring(0,8);
        inDiv3.innerHTML = element.quoteQty.substring(0,8);
        contentDiv.appendChild(inDiv1);
        contentDiv.appendChild(inDiv2);
        contentDiv.appendChild(inDiv3);

        this.order_sell.appendChild(contentDiv);  
      }
      if(element.isBuyerMaker == false && element.isBestMatch == true){
        const contentDiv = document.createElement('div');    

        const inDiv1 = document.createElement('div');
        const inDiv2 = document.createElement('div');  
        const inDiv3 = document.createElement('div');  

        contentDiv.classList.add("order-book-list-in");
    

        inDiv1.innerHTML = element.price.substring(0,7);
        inDiv2.innerHTML = element.qty.substring(0,8);
        inDiv3.innerHTML = element.quoteQty.substring(0,8);
        contentDiv.appendChild(inDiv1);
        contentDiv.appendChild(inDiv2);
        contentDiv.appendChild(inDiv3);

        this.order_buy.appendChild(contentDiv);  
      }
      
       
      });
    }
    
}