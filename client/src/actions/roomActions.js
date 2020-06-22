import repository from '../common/repository';
import { CreateRoom, SubscribeToGameServer, JoinRoombyName } from '../common/socketUtils';

const ApplyFieldChange = (val, field, model) => {
    switch(field) {
        case 'name': {
            model.name = val;
            break;
        }
        case 'roomName': {
            model.roomName = val;
            break;
        }
    }
}
export const CreateRoomFieldChange = (val, field, model) => dispatch => {
    console.log('create room field change', val);
    ApplyFieldChange(val, field, model);
    dispatch({
        type: 'ROOM_FIELD_CHANGED',
        payload: model
    })
}

export const JoinRoomFieldChange = (val, field, model) => dispatch => {
    ApplyFieldChange(val, field, model);
    dispatch({
        type: 'JOIN_ROOM_FIELD_CHANGED',
        payload: model
    })
}

export const FetchRooms = () => dispatch => {
    SubscribeToGameServer((data) => {
        dispatch({
            type: 'ROOMS_FETCHED',
            payload: data
        })
    });
       
    let ApiUrl = 'http://localhost:4001/api';
    return new Promise((resolve, reject) => {
        let url = `${ApiUrl}/rooms`;
        repository.getData(url)
            .then((res) => {
                dispatch({
                    type: 'ROOMS_FETCHED',
                    payload: res.data
                })
            })
            .then(() => {
                resolve(true);
            })
            .catch((err) => {
                reject(err)
            })
    })
    
}

export const SubmitNewRoom = (model) => dispatch => {
    const errors = ValidateFields(model);
    if(errors && errors.length) {
        dispatch({
            type: 'VALIDATION_ERRORS',
            payload: errors
        })
    }
    else {
        CreateRoom(model);
    }
}

export const JoinRoom = (model) => dispatch => {
    const errors = ValidateFields(model);
    if(errors && errors.length > 0) {
        dispatch({
            type: 'VALIDATION_ERRORS',
            payload: errors
        })
    }
    else {
        JoinRoombyName(model);
    }
}

const ValidateFields = (model) => {
    let errors = [];
    if(!model.name) {
        errors.push('Player name is mandatory');
    }
    if(!model.roomName) {
        errors.push('Room name is mandatory');
    }
    return errors;
}