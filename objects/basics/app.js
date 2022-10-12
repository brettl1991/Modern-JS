//Objects: group pieces of data together, its properties are key value pair, when you store them in a variable you reference them, can contain any value
//{}
//this above means object literal, no properties in it

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

console.log(fitBitData);

//access to values:
//. syntax
console.log(fitBitData.totalMiles); //211.7
//in objects all keys stored as strings!
