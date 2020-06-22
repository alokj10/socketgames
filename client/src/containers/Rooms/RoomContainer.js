import React from 'react';
import { connect } from 'react-redux';
import RoomsList from './RoomsList';
import { FetchRooms, SubmitNewRoom, CreateRoomFieldChange,
    JoinRoomFieldChange, JoinRoom } from '../../actions/roomActions';
import AddRoom from './AddRoom';

class RoomContainer extends React.Component {

    componentDidMount = () => {
        this.props.FetchRooms();
        // SubscribeToGameServer()
    }

    onSubmitNewRoom = (model) => {
        console.log('model', model);
        this.props.SubmitNewRoom(model);
            // .then((res) => {
            //     this.props.FetchRooms();
            // })
            // .catch((err) => {

            // })
    }
    
    onJoinRoom = (model) => {
        console.log('model', model);
        this.props.JoinRoom(model);
            // .then((res) => {
            //     this.props.FetchRooms();
            // })
            // .catch((err) => {

            // })
    }

    render = () => {
        let { all_rooms, roomModel, joinRoomModel, validation_errors } = this.props;
        console.log('roomModel', roomModel);
        
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <RoomsList 
                        rooms={all_rooms}
                        model={joinRoomModel}
                        onFieldChange={(val, field) => this.props.JoinRoomFieldChange(val, field, joinRoomModel)}
                        onJoinRoom={() => this.onJoinRoom(joinRoomModel)}
                        selectedRoomName={joinRoomModel.roomName} 
                    />
                </div>
                <div className="col-md-6">
                    <AddRoom 
                        model={roomModel}
                        onFieldChange={(val, field) => this.props.CreateRoomFieldChange(val, field, roomModel)}
                        onSubmitNewRoom={() => this.onSubmitNewRoom(roomModel)}
                    />
                </div>
            </div>
                {validation_errors && validation_errors.length > 0 &&
                validation_errors.map((error, i) => {
                    console.log(error);
                    return (
                        <div className="row align-center text-danger" key={i}>
                            {error}
                        </div>
                    )
                })
                }
                </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state.roomReducer
});
const mapDispatchToProps = dispatch => ({
    FetchRooms: () => dispatch(FetchRooms()),
    SubmitNewRoom: (roomModel) => dispatch(SubmitNewRoom(roomModel)),
    CreateRoomFieldChange: (val, field, model) => dispatch(CreateRoomFieldChange(val, field, model)),
    JoinRoomFieldChange: (val, field, model) => dispatch(JoinRoomFieldChange(val, field, model)),
    JoinRoom: (roomModel) => dispatch(JoinRoom(roomModel)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);