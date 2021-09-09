import React, {Fragment} from 'react';
import GridTip from "./GridTip";

function Left(props) {

    return (
        <Fragment>
            <div>
                <h5>Bill</h5>
                <input type={'number'} onChange={e => props.handleChangeBill(e.target.value)}/>
                <h5>Select Tip %</h5>
                <GridTip bill={props.numberBill} handleClickTip={props.handleClickTip}
                         handleChangeTip={props.handleChangeTip}/>
                <h5>Number of people</h5>
                <input type={'number'} onChange={e => props.handleChangePeople(e.target.value)}/>
            </div>
        </Fragment>
    );
}

export default Left;