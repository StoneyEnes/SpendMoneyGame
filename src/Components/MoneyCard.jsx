import {NumericFormat} from 'react-number-format';


export default function MoneyCard({money, setMoney}) {
    return (
        <div
            className="bg-gradient-to-b from-[#2ecc71] p-4 to-[#1abc9c] w-[60rem] flex text-center justify-center items-center mt-6">
            <div className="font-bold text-3xl text-center text-white relative">
                <p className="absolute left-16">$</p>
                <NumericFormat type="text" className="bg-transparent font-bold text-3xl text-center text-white" value={money} disabled
                               thousandSeparator=","/>
            </div>
        </div>
    );
}