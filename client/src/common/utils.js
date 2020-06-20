export const GetLockedTokens = (allTokenPositions, color) => {
    let lockedTokens = allTokenPositions[color].filter((val, i) => {
        return val.position === '-1';
    });
    return lockedTokens;
}

export const GetLockedTokensByColor = (allTokenPositions, color) => {
    let lockedTokens = GetLockedTokens(allTokenPositions, color);
    let redLockedTokens = (lockedTokens && lockedTokens.length > 0) ? 
                                lockedTokens.filter((val, i) => {
                                    return val.color === color;
                                }) :
                                [];
    return redLockedTokens;
}

export const GetTraverseNextPosition = (token, distanceUnits, tokenPath) => {
    let currentPosition = token.position;
    let currentNode = token;
    for(let i=1; i<=distanceUnits; i++) {
        currentNode = tokenPath.Next(currentPosition);
        if(currentNode === null) {
            currentPosition = '0';
            break;
        }
        currentPosition = currentNode.data.position;
        console.log('next pos', currentPosition);
    }
    return currentPosition;
}

export const GetNextMoveBy = (color) => {
    switch(color) {
        case 'yellow': return 'green'
        case 'green': return 'red'
        case 'red': return 'blue'
        case 'blue': return 'yello'
    }
}