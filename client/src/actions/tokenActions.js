import YellowTokenPath from "../common/YellowTokenPath";
import { GetTraverseNextPosition, GetNextMoveBy } from "../common/utils";

export const LoadInitialTokens = () => dispatch => {
    dispatch({
        type: 'INITIAL'
    });
    console.log('action initiated');
}
export const CurrentPositionChange = (allTokenPositions, token, tokenPath, distanceUnits) => dispatch => {
    allTokenPositions[token.color].map((val, i) => {
        if(val.name === token.name) {
            console.log('pos chng triggerd', distanceUnits);
            let traversePosition = GetTraverseNextPosition(token, distanceUnits, tokenPath);
            if(traversePosition !== '0') {
                val.position = traversePosition;
            }
        }
    });

    //MakeMoveAndLetEveryOneKnow(allTokenPositions);
        dispatch({
            type: 'POSITION_CHANGE',
            payload: {
                allTokenPositions,
                nextMoveBy: GetNextMoveBy(token.color)
            }
        })
}
