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
                                        className={props.selectedTip === index ? 'buttonTip' : 'pepe'}
                                        onClick={(e) => {props.handleClickTip(e, props.bill); props.handleSelectedTip(index)}}>{tipValues}%</button>
                            </div>
                        )
                    }
                )
                }
                <div><input value={props.numberTip}
                            id={'custom'}
                            placeholder={'Custom'}
                            type={'number'}
                            onChange={(e) => props.handleChangeTip(e, props.bill)}/>
                </div>
            </div>
        </Fragment>
    );
}

export default GridTip;