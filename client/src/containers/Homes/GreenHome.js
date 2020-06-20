import React, { Component } from 'react';
import Token from '../Token';
import { GetLockedTokensByColor } from '../../common/utils';

const GreenHome = (props) => {
    let color = 'green';
    let { allTokenPositions } = props;
    let lockedTokens = GetLockedTokensByColor(allTokenPositions, color);

        return (
            <div className="card bg-success token-home">
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
                                        <Token name="G" />
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
export default GreenHome;