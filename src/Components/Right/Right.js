import React, {Fragment} from 'react';
import '../Right/Right.css'

function Right(props) {

    const tipResult = () => {
        let tip = Number(props.numberTip && props.numberPeople ? props.numberTip / props.numberPeople : 0)
        return Math.round((tip + Number.EPSILON) * 100) / 100
    }

    const totalResult = () => {

        let total = Number(props.numberBill && props.numberPeople ? props.numberBill / props.numberPeople + tipResult() : 0)
        return Math.round((total + Number.EPSILON) * 100) / 100
    }

    return (
        <Fragment>
            <form>
                <div className={'background'}>
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
                    <button type={'reset'}
                            className={'buttonRight'}
                            onClick={() => props.handleClickReset()}> Reset
                    </button>
                </div>
            </form>


        </Fragment>
    );
}

export default Right;