import React from 'react';

const AddRoom = (props) => {
    let { model } = props;
    if(!model) {
        return(
            <div> Loading... </div>
        )
    }
    const handleNameChange = (event) => {
        props.onFieldChange(event.target.value, 'name');
    }
    const handleRoomNameChange = (event) => {
        props.onFieldChange(event.target.value, 'roomName');
    }
    return (
        <div className="card">
            <div className="card-header">
                Add Room
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label>My Name</label>
                        <input type="text" className="form-control" 
                            value={model.name}
                            onChange={handleNameChange}
                            placeholder="Enter player name" />
                        <small className="form-text text-muted">Please enter your name (displayed as player name)</small>
                    </div>
                    <div className="form-group">
                        <label>Room Name</label>
                        <input type="text" className="form-control"
                            value={model.roomName}
                            onChange={handleRoomNameChange}
                            placeholder="Enter Room Name" />
                    </div>
                    <button type="button" className="btn btn-primary"
                        onClick={() => props.onSubmitNewRoom()}
                        >Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddRoom;