import React from 'react';
import { connect } from 'react-redux';
import RoomsList from './RoomsList';
import { FetchRooms, SubmitNewRoom, CreateRoomFieldChange } from '../../actions/roomActions';
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

    render = () => {
        let { all_rooms, roomModel, joinRoomModel } = this.props;
        console.log('roomModel', roomModel);
        return (
            <div className="row">
                <div className="col-md-6">
                    <RoomsList 
                        rooms={all_rooms}
                        model={joinRoomModel}
                        onFieldChange={(val, field) => this.props.CreateRoomFieldChange(val, field, joinRoomModel)}
                        onJoinRoom={() => this.onJoinRoom()} 
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
        )
    }
}
const mapStateToProps = state => ({
    ...state.roomReducer
});
const mapDispatchToProps = dispatch => ({
    FetchRooms: () => dispatch(FetchRooms()),
    SubmitNewRoom: (roomModel) => dispatch(SubmitNewRoom(roomModel)),
    CreateRoomFieldChange: (val, field, model) => dispatch(CreateRoomFieldChange(val, field, model))
});
export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);