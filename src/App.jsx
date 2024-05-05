import './App.css'
import TopBar from "./Components/TopBar.jsx";
import PersonInfo from "./Components/PersonInfo.jsx";
import Cards from "./Components/Cards.jsx";
import {useEffect, useState} from "react";
import MoneyCard from "./Components/MoneyCard.jsx";

function App() {

    const [BillGatesMoney, setBillGatesMoney] = useState(100000000000);

    useEffect(() => {
        if (BillGatesMoney < 0){
            setBillGatesMoney(0);
        }
    }, [BillGatesMoney]);


  return (
    <div className="bg-[#f1f2f6] w-full h-full flex flex-col items-center overflow-scroll">
        <TopBar/>
        <PersonInfo />
        <MoneyCard money={BillGatesMoney} setMoney={setBillGatesMoney} />
        <Cards money={BillGatesMoney} setMoney={setBillGatesMoney} />
    </div>
  )
}

export default App
