
  
class BOOK{
    async getOrder(symbol = 'BTCUSDT'){
        const book = await fetch(`https://api.binance.com/api/v3/trades?symbol=${symbol}`);
        const bookResponsive = await book.json();
        const deepth = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}`);
        const deepthResponsive = await deepth.json();
        return {
            bookResponsive,deepthResponsive
        }       
    }
}