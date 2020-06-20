import React from 'react';
const Token = (props) => {
    let bgColor = 'badge-warning';
    switch(props.name) {
        case 'R':
            {
                bgColor = 'badge-danger';
                break;
            }
            case 'B': {
                bgColor = 'badge-primary';
                break;
            }
            case 'G': {
                bgColor = 'badge-success';
                break;
            }
            case 'Y': {
                bgColor = 'badge-warning';
                break;
            }
    }
    return (
        <span className={`badge badge-pill rounded-circle token ${bgColor}`}>
            {props.name}
        </span>
    )
}
export default Token;