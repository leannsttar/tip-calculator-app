import { useState, useEffect } from "react";
import { Input } from "./Input.jsx";
import { TipOptions } from "./TipOptions.jsx";
import { Amount } from "./Amount.jsx";
import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

function App() {
  const [isCustomTip, setIsCustomTip] = useState(false);

  const [bill, setBill] = useState();

  const [customTipValue, setCustomTipValue] = useState(0);

  const [numberPeople, setNumberPeople] = useState();

  const [tipAmount, setTipAmount] = useState(0);

  const [total, setTotal] = useState(0);

  const customTip = () => {
    setIsCustomTip(!isCustomTip);
  };

  const changeTip = (tip) => {
    setCustomTipValue(tip);
    setIsCustomTip(false);
  };

  const reset = () => {
    setIsCustomTip(false)
    setBill(undefined)
    setCustomTipValue(0)
    setNumberPeople(undefined)
    setTipAmount(0)
    setTotal(0)
  }

  useEffect(() => {
    //aca redondeo aparte, ya que el toFixed lo cambia a string, y con un string no puedo sacar el total (no sabia)
    if (bill && numberPeople && bill > 0 && numberPeople > 0 ) {
      const calculatedTipAmount = (customTipValue * bill) / 100 / numberPeople;
      const roundedTipAmount = calculatedTipAmount.toFixed(2);
      setTipAmount(roundedTipAmount);

      const calculatedTotal = bill / numberPeople + calculatedTipAmount;
      const roundedTotal = calculatedTotal.toFixed(2);
      setTotal(roundedTotal);
    }
  }, [customTipValue, bill, numberPeople]);

  return (
    <div className="bg-[#c4e4e7] w-screen h-screen flex flex-col items-center font-spaceMono md:justify-center">
      <h1 className="tracking-[0.4em] w-min text-center text-[1.24em] mt-9 mb-9 font-bold text-[#3f6465] md:mt-0 md:mb-14">
        SPLI TTER
      </h1>
      <div className="w-full h-full bg-white rounded-t-3xl px-5 pt-4 pb-7 flex flex-col gap-9 md:w-[80%] md:h-auto md:rounded-b-3xl md:flex-row md:p-7 lg:w-[900px] md:mb-24">
        <div className="flex flex-col gap-9 p-2 md:w-[50%]">
          <div className="w-full space-y-1.5">
            <p className="font-semibold text-[#5e7a7d]">Bill</p>
            <Input icon={dollarIcon} value={bill} setValue={setBill} />
          </div>
          <div className="space-y-4">
            <p className="font-semibold text-[#5e7a7d]">Select Tip %</p>
            <div className="grid grid-rows-3 grid-cols-2 gap-3 md:grid-rows-2 md:grid-cols-3">
              <div onClick={() => changeTip(5)}><TipOptions percentage={5} tipValue={customTipValue} /></div>
              <div onClick={() => changeTip(10)}><TipOptions percentage={10} tipValue={customTipValue} /></div>
              <div onClick={() => changeTip(15)}><TipOptions percentage={15} tipValue={customTipValue} /></div>
              <div onClick={() => changeTip(25)}><TipOptions percentage={25} tipValue={customTipValue} /></div>
              <div onClick={() => changeTip(50)}><TipOptions percentage={50} tipValue={customTipValue} /></div>
              {isCustomTip ? (
                <div className="bg-[#f3f8fb] rounded-md">
                  <input
                    onChange={(e) => setCustomTipValue(e.target.value)}
                    placeholder="0"
                    className="bg-[#f3f8fb] text-[#00494d] font-bold rounded-md outline-[#75c1b8] w-full h-full text-2xl text-right px-3"
                  ></input>
                </div>
              ) : (<div className="bg-[#f3f8fb] rounded-md py-2">
                  <p onClick={customTip} className="text-xl text-[#5e7a7d] text-center font-semibold">Custom</p>
                </div>)}
            </div>
          </div>
          <div className="space-y-1.5">
            <p className="font-semibold text-[#5e7a7d]">Number of People</p>
            <Input icon={personIcon} value={numberPeople} setValue={setNumberPeople}/>
          </div>
        </div>
        <div className="w-full h-full bg-[#00474b] rounded-xl px-5 pb-5 pt-9 flex flex-col justify-between md:w-[50%] md:p-8">
          <div className="space-y-5 md:space-y-12">  
            <Amount type={"Tip Amount"} amount={tipAmount} />
            <Amount type={"Total"} amount={total} />
          </div>
          {bill != 0 && bill != undefined && numberPeople != 0 && numberPeople != undefined  ? (<button onClick={reset} className="bg-[#26c2ad] hover:bg-[#9fe8df] py-2 font-bold text-xl rounded-md text-[#004448]">RESET</button>
          ) : (<button className="bg-[#0d686d] py-2 font-bold text-xl rounded-md text-[#055c61] cursor-default">RESET</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;