function calculateBounty(currentBounty, increase) {
    return currentBounty + increase;
}

let newBounty = calculateBounty(1_500_000_000, 500_000_000);
console.log(newBounty);
