import React from 'react';
import { connect } from 'react-redux';
import { LoadInitialTokens, CurrentPositionChange } from '../actions/tokenActions';
import VerticalGangway from './VerticalGangway';
import RedHome from './Homes/RedHome';
import GreenHome from './Homes/GreenHome';
import BlueHome from './Homes/BlueHome';
import YellowHome from './Homes/YellowHome';

class MainContainer extends React.Component {

    componentDidMount = () => {
        this.props.LoadInitialTokens();
    }

    render = () => {
        let { allTokenPositions } = this.props;
        console.log('container rendered', allTokenPositions);
        let fitleredToken = allTokenPositions['yellow'].filter((val, i) => {
            return val.name === 'YT1';
        });
        let tokenToMove = fitleredToken[0];

        return (
            <div className="main-container container">
                <div className="card bg-light">
                    <div className="card-body">
                    <div className="row no-gutters">
                    <div className="col-md-5">
                        <RedHome allTokenPositions={allTokenPositions}/>
                    </div>
                    <div className="col-md-2">
                        <div className="card bg-light token-home">
                            <VerticalGangway 
                                name='green' 
                                allTokenPositions={allTokenPositions}
                                />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <GreenHome allTokenPositions={allTokenPositions} />
                    </div>

                </div>
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <div className="card bg-light token-home">
                            <VerticalGangway 
                                name='red'
                                allTokenPositions={allTokenPositions}
                                 />
                        </div>
                    </div>
                    <div className="col-md-2 bg-secondary text-center">
                        HOME
                    </div>
                    <div className="col-md-5">
                        <div className="card bg-light token-home">
                            <VerticalGangway 
                                name='yellow'
                                allTokenPositions={allTokenPositions}
                                 />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <BlueHome allTokenPositions={allTokenPositions} />
                    </div>
                    <div className="col-md-2">
                        <div className="card bg-light">
                            <VerticalGangway 
                                name='blue' 
                                allTokenPositions={allTokenPositions}
                                />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <YellowHome allTokenPositions={allTokenPositions} />
                    </div>

                </div>
            
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary"
                            onClick={() => this.props.CurrentPositionChange(allTokenPositions, tokenToMove, 
                                allTokenPositions.yellowTokenPath, 2)}
                            >Dice</button>
                    </div>
                </div>
            
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state.tokenReducer
});
const mapDispatchToProps = dispatch => ({
    LoadInitialTokens: () => dispatch(LoadInitialTokens()),
    CurrentPositionChange: (yellowTokenPositions, token, yellowTokenPath, distanceUnits) => dispatch(CurrentPositionChange(yellowTokenPositions, token, yellowTokenPath, distanceUnits))
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);