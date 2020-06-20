import React, { Component } from 'react';
import Token from '../Token';
import { GetLockedTokensByColor } from '../../common/utils';

const BlueHome = (props) => {
    let color = 'blue';
    let { allTokenPositions } = props;
    let lockedTokens = GetLockedTokensByColor(allTokenPositions, color);

        return (
            <div className="card bg-primary token-home">
                <div className="card-body">
                    <div className="card bg-light token-home">
                        <div className="row inner-content">
                            {
                                allTokenPositions && 
                                lockedTokens && 
                                lockedTokens.length > 0 &&
                                lockedTokens.map((val, i) => {
                                    return (
                                    <div className="col-md-6" key={i}>
                                        <Token name="B" />
                                    </div>
                                    )
                                })     
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

}
export default BlueHome;