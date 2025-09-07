import './App.css';
import {Fragment, useState} from "react";
import Right from "./Components/Right/Right";
import Left from "./Components/Left/Left";


function App() {

    const [numberBill, setNumberBill] = useState('')
    const [numberPeople, setNumberPeople] = useState('')
    const [numberTip, setNumberTip] = useState(0)
    const [customTip, setCustomTip] = useState('')
    const [selectedTip, setSelectedTip] = useState(null)


    const handleClickTip = (e, bill) => {
        setNumberTip(e.target.value * bill)
    }
    const handleSelectedTip = (index) => {
        console.log(index)
        setSelectedTip(index)
    }
    const handleChangeTip = (e, bill) => {
        setNumberTip(e.target.value / 100 * bill)
        setCustomTip(e.target.value)
    }

    const handleChangeBill = (bill) => {
        setNumberBill(bill)
    }

    const handleChangePeople = (people) => {
        setNumberPeople(people)
    }

    const handleChangeCustom = (custom) => {
        console.log(custom)
        setCustomTip(custom)
    }


    const handleClickReset = () => {
        setNumberBill('')
        setNumberPeople('')
        setNumberTip('')
        setCustomTip('')
        setSelectedTip('')
    }

    return (
        <Fragment>
            <div className={'fondo'}>
                <div className={'app-header'}>
                    <h1 className={'app-title'}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={'title-icon'}>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="currentColor"/>
                        </svg>
                        Tip Calculator
                    </h1>
                    <p className={'app-subtitle'}>Calculate tips easily and split bills with friends</p>
                </div>
                <div className={'leftRightContainer'}>
                    <div className={'container'}>
                        <Left handleClickTip={handleClickTip}
                              handleChangeTip={handleChangeTip}
                              handleChangeBill={handleChangeBill}
                              numberBill={numberBill}
                              numberTip={numberTip}
                              numberPeople={numberPeople}
                              handleChangePeople={handleChangePeople}
                              handleClickReset={handleClickReset}
                              handleChangeCustom={handleChangeCustom}
                              customTip={customTip}
                              selectedTip={selectedTip}
                              handleSelectedTip={handleSelectedTip}/>

                        <Right numberTip={numberTip}
                               numberBill={numberBill}
                               numberPeople={numberPeople}
                               handleClickReset={handleClickReset}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
