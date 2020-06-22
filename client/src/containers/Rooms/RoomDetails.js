import React from 'react';

const RoomDetails = (props) => {
    let { users } = props;
    return (
        <div className="list-group">
        {users && users.length > 0 && users.map((user, i) => {
            return (
                <div key={i} className="list-group-item">
                    {user.name}
                </div>
            )
        })}
        </div>
    )
}
export default RoomDetails;