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
                                        onClick={(e) => {
                                            props.handleClickTip(e, props.bill);
                                            props.handleSelectedTip(index)
                                        }}>{tipValues}%
                                </button>
                            </div>
                        )
                    }
                )
                }
                <div>
                    <input value={props.customTip}
                           id={'custom'}
                           placeholder={'Custom'}
                           className={`customTips ${props.customTipError ? 'error-border' : ''}`}
                           type={'number'}
                           onChange={e => props.handleChangeTip(e, props.bill)}
                           onBlur={e => props.handleInputError(e, 'custom')}/>

                </div>

            </div>
            {props.customTipError && <span className={'error customError'}>{props.customTipError}</span>}
        </Fragment>
    );
}

export default GridTip;