import React, {Fragment} from 'react';
import '../Left/GripTip.css'

function GridTip(props) {

    const tipValues = [5, 10, 15, 25, 50];

    return (
        <Fragment>
            <div className={'gridTip'}>
                {tipValues.map((tipValues, index) => {
                        return (
                            <div key={index}>
                                <button value={tipValues / 100}
                                        onClick={(e) => props.handleClickTip(e, props.bill)}>{tipValues}</button>
                            </div>
                        )
                    }
                )
                }
                <div><input type={'number'} onChange={(e) => props.handleChangeTip(e, props.bill)}/></div>
            </div>
        </Fragment>
    );
}

export default GridTip;