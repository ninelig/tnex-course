const riskLevels = [99, 135, 76, 200, 150, 89];
const hexValues = riskLevels.map(level => level.toString(16));
console.log(hexValues);


const highRisks = riskLevels.filter(level => level > 100);
console.log(highRisks);



const totalRisk = riskLevels.reduce((sum, level) => sum + level, 0);
console.log(totalRisk);


const firstAbove150 = riskLevels.find(level => level > 150);
console.log(firstAbove150);


const cleanedRiskLevels = [...riskLevels]; 

for (let i = 0; i < cleanedRiskLevels.length; i++) {
  if (cleanedRiskLevels[i] < 80) {
    cleanedRiskLevels.splice(i, 1);
    i--; 
  }
}

console.log(cleanedRiskLevels);
