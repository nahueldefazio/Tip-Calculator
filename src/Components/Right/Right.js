import React, {Fragment} from 'react';
import '../Right/Right.css'

function Right(props) {

    const tipResult = () => {
        return (props.numberTip && props.numberPeople ? props.numberTip / props.numberPeople : 0)
    }

    const totalResult = () => {
        return (Number(props.numberBill && props.numberPeople ? props.numberBill / props.numberPeople + tipResult() : '0'))
    }

    return (
        <Fragment>
            <div>
                <div className={'containerRight'}>
                    <div>
                        <h6>Tip Amount</h6>
                        <span>/ person</span>
                    </div>
                    <div>
                        <p> $ {tipResult()}</p>{/*(142.55 * 0.15 / 5)*/}
                    </div>
                </div>
                <div className={'containerRight'}>
                    <div>
                        <h6>Total</h6>
                        <span>/ person</span>
                    </div>
                    <div>
                        <p>$ {totalResult()}</p> {/* (142.55 / 5 + 4.27)*/}
                    </div>
                </div>
                <button className={'buttonRight'}> Reset</button>
            </div>


        </Fragment>
    );
}

export default Right;