import React, {Fragment, useState} from 'react';
import GridTip from "./GridTip";
import './Left.css'

function Left(props) {
    const [tipError, setTipError] = useState('')
    const [peopleError, setPeopleError] = useState('')
    const [customTipError, setCustomtipError] = useState('')

    const handleInputError = (e, x) => {
        switch (x) {
            case "bill":
                if (e.target.value < 0) {
                    setTipError("Bill can not be negative.")
                    props.handleChangeBill('')
                } else setTipError('')
                break;
            case "people":
                if (e.target.value <= 0) {
                    setPeopleError("People can not be zero or negative.")
                    props.handleChangePeople('')
                } else setPeopleError('')
                break
            case "custom":
                if (e.target.value < 0) {
                    setCustomtipError("Tip can not be negative.")
                    props.handleChangeCustom('')
                } else setCustomtipError('')
                break
        }
    }

    return (
        <Fragment>
            <div className={'leftContainer'}>
                <h5>Bill</h5>
                <input placeholder={0}
                       value={props.numberBill}
                       className={'regularTips'}
                       style={{
                           outline: tipError ? "1px solid red" : ''
                       }}
                       type={'number'}
                       onChange={e => props.handleChangeBill(e.target.value)}
                       onBlur={e => handleInputError(e, 'bill')}/>
                {tipError && <span className={'error'}>{tipError}</span>}
                <h5>Select Tip %</h5>
                <GridTip bill={props.numberBill}
                         handleClickTip={props.handleClickTip}
                         handleChangeTip={props.handleChangeTip}
                         customTip={props.customTip}
                         handleChangeCustom={props.handleChangeCustom}
                         selectedTip={props.selectedTip}
                         handleSelectedTip={props.handleSelectedTip}
                         handleInputError={handleInputError}
                         customTipError={customTipError}/>
                <h5>Number of people</h5>
                <input placeholder={0}
                       value={props.numberPeople}
                       className={'customTips'}
                       style={{
                           outline: peopleError ? "1px solid red" : ''
                       }}
                       type={'number'}
                       onChange={e => props.handleChangePeople(e.target.value)}
                       onBlur={e => handleInputError(e, 'people')}/>
                {peopleError && <span className={'error'}>{peopleError}</span>}
            </div>
        </Fragment>
    );
}

export default Left;