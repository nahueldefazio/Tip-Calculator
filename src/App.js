import './App.css';
import {Fragment, useState} from "react";
import Right from "./Components/Right/Right";
import Left from "./Components/Left/Left";


function App() {

    const [numberBill, setNumberBill] = useState(0)
    const [numberPeolple, setNumberPeople] = useState(0)
    const [numberTip, setNumberTip] = useState(0)
    const [customTip, setCustomTip] = useState(0)

    const handleClickTip = (e, bill) => {
        setNumberTip(e.target.value * bill)
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
      setCustomTip(custom)
    }

    const handleClickReset = () =>{
        setNumberBill(0.00)
        setNumberPeople(0.00)
        setNumberTip(0.00)
        setCustomTip(0.00)

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
                              numberPeople={numberPeolple}
                              handleChangePeople={handleChangePeople}
                              handleClickReset={handleClickReset}
                              handleChangeCustom={handleChangeCustom}
                              customTip={customTip}/>
                        <Right numberTip={numberTip}
                               numberBill={numberBill}
                               numberPeople={numberPeolple}
                               handleClickReset={handleClickReset}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
