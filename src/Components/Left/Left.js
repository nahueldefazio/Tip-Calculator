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
                <div className={'input-container'}>
                    <h5>Bill</h5>
                    <div className={'input-icon'}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="#9EBBBD"/>
                        </svg>
                    </div>
                    <input placeholder={0}
                           value={props.numberBill}
                           className={`regularTips input-with-icon ${tipError ? 'error-border' : ''}`}
                           type={'number'}
                           onChange={e => props.handleChangeBill(e.target.value)}
                           onBlur={e => handleInputError(e, 'bill')}/>
                    {tipError && <span className={'error'}>{tipError}</span>}
                </div>
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
                <div className={'input-container'}>
                    <h5>Number of people</h5>
                    <div className={'input-icon'}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5c-.47-.62-1.21-.99-2.01-.99H9.46c-.8 0-1.54.37-2.01.99L6 10.5c-.47-.62-1.21-.99-2.01-.99H2.46c-.8 0-1.54.37-2.01.99L0 10.5v9.5h2v6h2v-6h2v6h2v-6h2v6h2v-6h2v6h2v-6h2v6h2zm-8-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="#9EBBBD"/>
                        </svg>
                    </div>
                    <input placeholder={0}
                           value={props.numberPeople}
                           className={`customTips input-with-icon ${peopleError ? 'error-border' : ''}`}
                           type={'number'}
                           onChange={e => props.handleChangePeople(e.target.value)}
                           onBlur={e => handleInputError(e, 'people')}/>
                    {peopleError && <span className={'error'}>{peopleError}</span>}
                </div>
            </div>
        </Fragment>
    );
}

export default Left;