import React from 'react';
import Token from './Token';

const VerticalGangway = (props) => {
    let bgcolor = 'bg-success';
    switch (props.name) {
        case 'green': {
            bgcolor = 'bg-success'
            break;
        }
        case 'yellow': {
            bgcolor = 'bg-warning';
            break;
        }
        case 'red': {
            bgcolor = 'bg-danger';
            break;
        }
        case 'blue': {
            bgcolor = 'bg-primary';
            break;
        }
    }
    let redHorizontalRowsCount = [
        {
            row: 1, cols: [
                { val: 'R0', isSafe: false },
                { val: 'R1', isSafe: props.name === 'red' },
                { val: 'R2', isSafe: false },
                { val: 'R3', isSafe: false },
                { val: 'R4', isSafe: false },
                { val: 'R5', isSafe: false }
            ]
        },
        {
            row: 2, cols: [
                { val: 'R12', isSafe: props.name !== 'red' },
                { val: 'R13', isSafe: true },
                { val: 'R14', isSafe: true },
                { val: 'R15', isSafe: true },
                { val: 'R16', isSafe: true },
                { val: 'R17', isSafe: props.name !== 'yellow' }
            ]
        },
        {
            row: 3, cols: [
                { val: 'R11', isSafe: false },
                { val: 'R10', isSafe: false },
                { val: 'R9', isSafe: true, showStar: true },
                { val: 'R8', isSafe: false },
                { val: 'R7', isSafe: false },
                { val: 'R6', isSafe: false }
            ]
        }
    ];

    let yellowHorizontalRowsCount = [
        {
            row: 1, cols: [
                { val: 'Y6', isSafe: false },
                { val: 'Y7', isSafe: false },
                { val: 'Y8', isSafe: false },
                { val: 'Y9', isSafe: true, showStar: true },
                { val: 'Y10', isSafe: false },
                { val: 'Y11', isSafe: false }
            ]
        },
        {
            row: 2, cols: [
                { val: 'Y17', isSafe: true },
                { val: 'Y16', isSafe: true },
                { val: 'Y15', isSafe: true },
                { val: 'Y14', isSafe: true },
                { val: 'Y13', isSafe: true },
                { val: 'Y12', isSafe: false }
            ]
        },
        {
            row: 3, cols: [
                { val: 'Y5', isSafe: false },
                { val: 'Y4', isSafe: false },
                { val: 'Y3', isSafe: false },
                { val: 'Y2', isSafe: false },
                { val: 'Y1', isSafe: true },
                { val: 'Y0', isSafe: false }
            ]
        }
    ];

    let blueVerticalRowsCount = [
        { row: 1, cols: [{ val: 'B5', isSafe: false }, { val: 'B17', isSafe: true }, { val: 'B6', isSafe: false }] },
        { row: 2, cols: [{ val: 'B4', isSafe: false }, { val: 'B16', isSafe: true }, { val: 'B7', isSafe: false }] },
        { row: 3, cols: [{ val: 'B3', isSafe: false }, { val: 'B15', isSafe: true }, { val: 'B8', isSafe: false }] },
        { row: 4, cols: [{ val: 'B2', isSafe: false }, { val: 'B14', isSafe: true }, { val: 'B9', isSafe: true, showStar: true }] },
        { row: 5, cols: [{ val: 'B1', isSafe: true }, { val: 'B13', isSafe: true }, { val: 'B10', isSafe: false }] },
        { row: 6, cols: [{ val: 'B0', isSafe: false }, { val: 'B12', isSafe: false }, { val: 'B11', isSafe: false }] },
    ];
    let greenVerticalRowsCount = [
        { row: 1, cols: [{ val: 'G11', isSafe: false }, { val: 'G12', isSafe: false }, { val: 'G0', isSafe: false }] },
        { row: 2, cols: [{ val: 'G10', isSafe: false }, { val: 'G13', isSafe: true }, { val: 'G1', isSafe: true }] },
        { row: 3, cols: [{ val: 'G9', isSafe: true, showStar: true }, { val: 'G14', isSafe: true }, { val: 'G2', isSafe: false }] },
        { row: 4, cols: [{ val: 'G8', isSafe: false }, { val: 'G15', isSafe: true }, { val: 'G3', isSafe: false }] },
        { row: 5, cols: [{ val: 'G7', isSafe: false }, { val: 'G16', isSafe: true }, { val: 'G4', isSafe: false }] },
        { row: 6, cols: [{ val: 'G6', isSafe: false }, { val: 'G17', isSafe: true }, { val: 'G5', isSafe: false }] },
    ];
    if (props.name === 'blue') {
        return (
            RenderVerticalGangway(blueVerticalRowsCount, props.allTokenPositions, bgcolor)
        )
    }

    if (props.name === 'green') {
        return (
            RenderVerticalGangway(greenVerticalRowsCount, props.allTokenPositions, bgcolor)
        )

    }

    if (props.name === 'red') {
        return (
            RenderHorizontalGangway(redHorizontalRowsCount, props.allTokenPositions, bgcolor)
        )
    }
    if (props.name === 'yellow') {
        return (
            RenderHorizontalGangway(yellowHorizontalRowsCount, props.allTokenPositions, bgcolor)
        )
    }
}
export default VerticalGangway;

const PositionContainsToken = (column, allTokenPositions) => {
    let filteredTokenPositions = [];
    allTokenPositions.yellow.filter((val, i) => {
        if(val.position === column.val) filteredTokenPositions.push(val);
    });
    allTokenPositions.green.filter((val, i) => {
        if(val.position === column.val) filteredTokenPositions.push(val);
    });
    allTokenPositions.red.filter((val, i) => {
        if(val.position === column.val) filteredTokenPositions.push(val);
    });
    allTokenPositions.blue.filter((val, i) => {
        if(val.position === column.val) filteredTokenPositions.push(val);
    });
    return filteredTokenPositions;
}

const RenderVerticalGangway = (rows, allTokenPositions, bgcolor) => {
    return (
        <div>
            {rows.map((val, i) => {
                return (<div className="row no-gutters" key={i}>
                    {val.cols.map((col, ci) => {
                        let positionColor = bgcolor;
                        if(col.showStar) {
                            positionColor = 'bg-secondary';
                        }
                        else {
                            positionColor = col.isSafe ? bgcolor : '';
                        }
                        let tokensFilteredByPosition = PositionContainsToken(col, allTokenPositions);
                        if (tokensFilteredByPosition && tokensFilteredByPosition.length > 0) {
                            let t1 = tokensFilteredByPosition[0];
                            return (
                                <div className={`col-md-4 cell ${positionColor}`} key={ci}>
                                    <Token name={t1.name[0]} />
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className={`col-md-4 cell ${positionColor} text-white`} key={ci}>
                                    A
                                </div>
                            )
                        }
                    })}
                </div>
                )
            })}
        </div>
    )

}

const RenderHorizontalGangway = (rows, allTokenPositions, bgcolor) => {
    return (
        <div>
            {rows.map((val, i) => {
                return (<div className="row no-gutters" key={i}>
                    {val.cols.map((col, ci) => {
                        let positionColor = bgcolor;
                        if(col.showStar) {
                            positionColor = 'bg-secondary';
                        }
                        else {
                            positionColor = col.isSafe ? bgcolor : '';
                        }
                        
                        let tokensFilteredByPosition = PositionContainsToken(col, allTokenPositions);
                        if (tokensFilteredByPosition && tokensFilteredByPosition.length > 0) {
                            let t1 = tokensFilteredByPosition[0];
                            
                            return (
                                <div className={`col-md-2 cell ${positionColor}`} key={ci}>
                                    <Token name={t1.name[0]} />
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className={`col-md-2 cell ${positionColor} text-white`} key={ci}>
                                    A
                                </div>
                            )
                        }
                    })}
                </div>
                )
            })}
        </div>
    )

}
