import React, { Component } from 'react';
import Token from '../Token';
import { GetLockedTokensYellow, GetLockedTokensByColor } from '../../common/utils';

const YellowHome = (props) => {
    let color = 'yellow';
    let { allTokenPositions } = props;
    let lockedTokens = GetLockedTokensByColor(allTokenPositions, color);
    console.log('yellow locked', lockedTokens.length);
    
    return (
            <div className="card bg-warning token-home">
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
                                        <Token name="Y" />
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
export default YellowHome;