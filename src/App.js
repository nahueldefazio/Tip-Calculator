import './App.css';
import {Fragment, useState} from "react";
import Right from "./Components/Right/Right";
import Left from "./Components/Left/Left";


function App() {

    const [numberBill, setNumberBill] = useState(null)
    const [numberPeolple, setNumberPeople] = useState(null)
    const [numberTip, setNumberTip] = useState(null)

    const handleClickTip = (e, bill) => {
        setNumberTip(e.target.value * bill)
    }

    const handleChangeTip = (e, bill) => {
        setNumberTip(e.target.value / 100 * bill)
    }

    const handleChangeBill = (bill) => {
        setNumberBill(bill)
    }

    const handleChangePeople = (people) => {
        setNumberPeople(people)
    }


    return (
        <Fragment>
            <div className={'container'}>
                <Left handleClickTip={handleClickTip}
                      handleChangeTip={handleChangeTip}
                      handleChangeBill={handleChangeBill}
                      numberBill={numberBill}
                      numberTip={numberTip}
                      handleChangePeople={handleChangePeople}/>
                <Right numberTip={numberTip} numberBill={numberBill} numberPeople={numberPeolple}/>
            </div>
        </Fragment>
    );
}

export default App;
