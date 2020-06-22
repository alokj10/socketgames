const initialState = {
    roomModel: {
        name: '', roomName: ''
    },
    joinRoomModel: {
        name: '', roomName: ''
    },
    all_rooms: []
}
export default (state = {}, action) => {
    switch(action.type) {
        case 'ROOMS_FETCHED': {
            return {
                ...state,
                all_rooms: action.payload,
                roomModel: {},
                joinRoomModel: {}
            }
        }
        
        case 'ROOM_FIELD_CHANGED': {
            console.log('reducer create room field change', action.payload);
            return {
                ...state,
                roomModel: {
                    ...state.roomModel,
                    roomName: action.payload.roomName,
                    name: action.payload.name
                }
            }
        }
        case 'JOIN_ROOM_FIELD_CHANGED': {
            return {
                ...state,
                joinRoomModel: {
                    ...state.joinRoomModel,
                    roomName: action.payload.roomName,
                    name: action.payload.name
                }
            }
        }
        case 'ROOM_CREATED': {
            return {
                ...state,
                roomModel: {},
                success: true
            }
        }

        case 'JOIN_ROOM': {
            console.log('will have to start again, token: ', action.payload);
            return {
                ...state
            }
        }
        case 'VALIDATION_ERRORS': {
            return {
                ...state,
                validation_errors: action.payload
            }
        }

        default: {
            return initialState;
        }
    }
}