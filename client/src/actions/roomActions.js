import repository from '../common/repository';
import { CreateRoom, SubscribeToGameServer } from '../common/socketUtils';

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
    // switch(field) {
    //     case 'name': {
    //         model.name = val;
    //         break;
    //     }
    //     case 'roomName': {
    //         model.roomName = val;
    //         break;
    //     }
    // }
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
       /* 
    let ApiUrl = 'http://localhost:4001/api/';
    return new Promise((resolve, reject) => {
        let url = `${ApiUrl}/rooms`;
        repository.getData(url)
            .then((res) => {
                dispatch({
                    type: 'ROOMS_FETCHED',
                    payload: res
                })
            })
            .then(() => {
                resolve(true);
            })
            .catch((err) => {
                reject(err)
            })
    })
    */
}

export const SubmitNewRoom = (model) => dispatch => {
    CreateRoom(model);
    /*
    let ApiUrl = 'http://localhost:4001/api/';
    return new Promise((resolve, reject) => {
        let url = `${ApiUrl}/rooms`;
        console.log('model to save', model);
        repository.saveData(url, model)
            .then((res) => {
                dispatch({
                    type: 'ROOMS_CREATED',
                    payload: res
                })
            })
            .then(() => {
                resolve(true);
            })
            .catch((err) => {
                reject(err)
            })
    })
    */
}