let conePrice = 4;
let sundaePrice = 8;
let conesSoldToday = 250;
let sundaesSoldToday = 120;
let coneSales = conePrice * conesSoldToday;
let sundaesSales = sundaePrice * sundaesSoldToday;
let dailyEarning = coneSales + sundaesSales;
let discount = dailyEarning * 0.95;

if (dailyEarning >=1000){
    console.log `"Volume Discount Applied:Yes ${discount}`
}else{
    console.log `"Volume Discount Applied:No`
}