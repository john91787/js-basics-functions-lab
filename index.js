function distanceFromHqInBlocks(a){
    let blocks;
    blocks = a-42;
    return Math.abs(blocks); 
}

function distanceFromHqInFeet(result2){
    let feet;
    feet = distanceFromHqInBlocks(result2);
    result2 = feet * 264;
    return result2;
}

function distanceTravelledInFeet(b,c){
    let travel;
    travel = Math.abs(b-c)*264;
    return travel;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return .02*(distance -400);
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return `cannot travel that far`;
    }
}