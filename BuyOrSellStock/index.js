// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// Example:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

/**
 * @param {number[]} prices
 * @return {number}
 */
// function maxProfit(prices) {
//     let maxProfit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > prices[i - 1]) {
//             maxProfit += prices[i] - prices[i - 1];
//         }
//     }

//     return maxProfit;
// }



function maxProfit(prices) {
    let maxProfit = 0;
    let actions = [];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
            actions.push({ action: 'Buy', day: i - 1, price: prices[i - 1] });
            actions.push({ action: 'Sell', day: i, price: prices[i] });
        }
    }

    console.log("Actions:", actions);
    return maxProfit;
}

// // Example usage:
// const prices = [7, 1, 5, 3, 6, 4];
// console.log("Max Profit:", maxProfit(prices));
