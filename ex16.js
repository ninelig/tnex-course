let ticketPrice = 20;
let ticketsSold = 500;
let concertCosts = 8000;
let totalEarnings = ticketPrice * ticketsSold;
let profit =  totalEarnings - concertCosts;

if ( profit > 0){
    console.log`Concert Profit: ${profit} Great success!`
}else{
    console.log `Concert did not cover costs. Earnings: ${totalEarnings}, Costs: ${concertCosts}`
}