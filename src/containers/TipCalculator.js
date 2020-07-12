import React, { useState } from 'react';
import { calculateTip, calculateTotal } from '../helpers/math';
import BillInput from '../components/BillInput';
import Bill from '../components/Bill';

const TipCalculator = ({ initModel }) => {
  const { amount, tipPct, tip, total } = initModel;

  const [calculatedTip, setCalculatedTip] = useState(tip);
  const [calculatedTotal, setCalculatedTotal] = useState(total);

  const onBillChangeHandler = ({ billAmount, billTipPct }) => {
    const tipFor = calculateTip(billTipPct);
    const totalTipAmount = tipFor(billAmount);
    setCalculatedTip(totalTipAmount);

    const totalWithTip = calculateTotal(totalTipAmount);
    const grandTotal = totalWithTip(billAmount); 
    setCalculatedTotal(grandTotal);
  };

  return (
    <div className="container">
      <div className="row justify-content-center border-bottom mb-3">
        <div>
          <h3 style={{ display: 'inline' }}>Tip Calculator</h3><small className="font-weight-light ml-2">v{process.env.REACT_APP_VERSION}</small>
        </div>
      </div>
      <div className="row">
        <BillInput amount={amount} tipPct={tipPct} onBillChange={onBillChangeHandler} />
      </div>
      <Bill tip={calculatedTip} total={calculatedTotal} />
    </div>
  );
};

export default TipCalculator;