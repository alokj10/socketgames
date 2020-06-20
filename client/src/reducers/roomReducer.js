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
            return {
                ...state,
                roomModel: action.payload
            }
        }
        case 'JOIN_ROOM_FIELD_CHANGED': {
            return {
                ...state,
                joinRoomModel: action.payload
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

        default: {
            return {
                ...state,
                roomModel: {},
                joinRoomModel: {}
            };
        }
    }
}