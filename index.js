// Code your solution in this file!
function distanceFromHqInBlocks(stNumber){
    return Math.abs(stNumber - 42);
}

const blockInFeet = 264;
function distanceFromHqInFeet(endBlock, startBlock = 42){
    return (Math.abs(startBlock - endBlock)) *blockInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return (Math.abs(startBlock - endBlock)) *blockInFeet;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    const freeFareInFeet = 400;
    if (distanceTravelled < freeFareInFeet) return 0;
    else if (distanceTravelled >= freeFareInFeet && distanceTravelled < 2000) return (distanceTravelled-400) * .02;
    else if (distanceTravelled >= 2000 && distanceTravelled < 2500) return 25;
    else return "cannot travel that far";
}