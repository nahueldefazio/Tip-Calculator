import React, {Fragment} from 'react';
import GridTip from "./GridTip";
import './Left.css'

function Left(props) {

    const resetValue  = (inputStyle) =>{
        switch (inputStyle) {
            case "bill":
                return props.numberBill === 0 ? '' : props.numberBill;
                break;
            case "people":
                return props.numberPeople === 0 ? '' : props.numberPeople;
                break;
            default : break
        }
    }
    return (
        <Fragment>
            <div className={'leftContainer'}>
                <h5>Bill</h5>
                <input placeholder={0}
                       value={resetValue('bill')}
                       className={'regularTips'}
                       type={'number'}
                       onChange={e => props.handleChangeBill(e.target.value)}/>
                <h5>Select Tip %</h5>
                <GridTip bill={props.numberBill}
                         handleClickTip={props.handleClickTip}
                         handleChangeTip={props.handleChangeTip}
                         customTip={props.customTip}
                         handleChangeCustom={props.handleChangeCustom}/>
                <h5>Number of people</h5>
                <input placeholder={0}
                       value={resetValue('people')}
                       className={'customTips'}
                       type={'number'}
                       onChange={e => props.handleChangePeople(e.target.value)}/>
            </div>
        </Fragment>
    );
}

export default Left;