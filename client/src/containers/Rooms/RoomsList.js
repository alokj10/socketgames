import React from 'react';
import RoomDetails from './RoomDetails';

const RoomsList = (props) => {
    let { model } = props;

    const handleNameChange = (event) => {
        props.onFieldChange(event.target.value, 'name');
    }
    const handleRoomNameChange = (roomName) => {
        props.onFieldChange(roomName, 'roomName');
    }

    if(props.rooms && props.rooms.length === 0) {
        return (
            <h5>No Rooms Found</h5>
        )
    }

    console.log('props.rooms', props.rooms);
    return (
            <div className="card">
                <div className="card-header">
                    <h3>Join Room</h3>
                </div>
                <div className="card-body">
            
                    <div className="form-group">
                        <label>My Name</label>
                        <input type="text" className="form-control" 
                            value={model.name}
                            onChange={handleNameChange}
                            placeholder="Enter player name" />
                        <small className="form-text text-muted">Please enter your name (displayed as player name)</small>
                    </div>

                    <div className="list-group">
                        {props.rooms && props.rooms.length > 0 &&
                            props.rooms.map((room, i) => {
                                return (
                                    <li key={i}
                                        className={`list-group-item ${props.selectedRoomName===room.roomName ? 'bg-success': ''}`}
                                        onClick={()=>handleRoomNameChange(room.roomName)}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                {room.roomName}
                                            </div>
                                            <div className="col-md-8">
                                                <RoomDetails users={room.users} />
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            
                <div className="card-footer">
                    <button className="btn btn-success"
                        onClick={() => props.onJoinRoom()}>
                    Join</button>
                </div>
            </div>
    )
}
export default RoomsList;