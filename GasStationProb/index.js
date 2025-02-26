var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0, totalCost = 0;
    let tank = 0, startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];

        tank += gas[i] - cost[i];

        if (tank < 0) {
            // If we can't reach the next station, reset the start index
            startIndex = i + 1;
            tank = 0;  // Reset tank as we're starting fresh
        }
    }

    return totalGas >= totalCost ? startIndex : -1;
};