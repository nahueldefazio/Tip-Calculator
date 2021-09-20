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
