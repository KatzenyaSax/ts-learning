function maxProfit(prices: number[]): number {
    if(prices.length==1) return 0;
    let minPrice = prices[0];
    let maxProfit = 0;

    prices.forEach(price=>{
        //维护最小价格
        if(price<=minPrice) minPrice=price;
        //当且价格大于等于最小价格时，才更新最大利润，因为如果当前价格小于最小价格，此时卖出一定亏钱，没有意义
        else maxProfit=price-minPrice>maxProfit?price-minPrice:maxProfit;
    })

    return maxProfit;
};

console.log(maxProfit([7,6,4,3,1]));