import Tokens from "../common/Tokens";

let initialTokenPositions ={
    nextMoveBy: 'red',
    blue: [
        { name: 'BT1', color: 'blue', position: '-1' },
        { name: 'BT2', color: 'blue', position: '-1' },
        { name: 'BT3', color: 'blue', position: '-1' },
        { name: 'BT4', color: 'blue', position: '-1' },
    ],
    red: [
        { name: 'RT1', color: 'red', position: '-1' },
        { name: 'RT2', color: 'red', position: '-1' },
        { name: 'RT3', color: 'red', position: '-1' },
        { name: 'RT4', color: 'red', position: '-1' },
    ],
    yellow: [
        { name: 'YT1', color: 'yellow', position: 'G12' },
        { name: 'YT2', color: 'yellow', position: '-1' },
        { name: 'YT3', color: 'yellow', position: '-1' },
        { name: 'YT4', color: 'yellow', position: '-1' },
    ],
    green: [
        { name: 'GT1', color: 'green', position: '-1' },
        { name: 'GT2', color: 'green', position: '-1' },
        { name: 'GT3', color: 'green', position: '-1' },
        { name: 'GT4', color: 'green', position: '-1' }
    ]
}

export default (state = {}, action) => {
    switch(action.type) {
        case 'POSITION_CHANGE': {
            console.log('position change of token: ', action.payload);
            return {
                ...state,
                allTokenPositions: {
                    ...state.allTokenPositions,
                    nextMoveBy: action.payload.nextMoveBy
                }
            }
        }
        
        case 'POSITION_YELLOW_CHANGE': {
            console.log('position change of yellow: ', action.payload);
            let allTokenPositions = state.allTokenPositions;
            allTokenPositions.yellowTokenPositions = [];
            let payload = action.payload;
            payload.map((val, i) => {
                allTokenPositions.yellowTokenPositions.push(val);
            })
            return {
                ...state,
                allTokenPositions: {
                    ...state.allTokenPositions,
                    nextMoveBy: action.payload.nextMoveBy
                }
            }
        }

        case 'START_AGAIN': {
            console.log('will have to start again, token: ', action.payload);
            return {
                ...state
            }
        }

        case 'COMPLETE_PATH': {
            console.log('completed path of token:', action.payload);
            return {
                ...state
            }
        }

        case 'INITIAL': {
            let tokens = new Tokens();
            tokens.Initialize();
            initialTokenPositions.yellowTokenPath = tokens.yellowTokenPath;
            return {
                ...state,
                allTokenPositions: initialTokenPositions
            };
        }

        default: {
            return {
                ...state,
                allTokenPositions: initialTokenPositions,
            };
        }
    }
}