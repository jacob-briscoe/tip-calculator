import React, { useState, useEffect } from 'react';
import * as R from 'ramda';

const BillInput = ({ onBillChange, amount, tipPct }) => {
  const [amountInput, setAmountInput] = useState(amount || '');
  const [tipPctInput, setTipPctInput] = useState(tipPct);

  useEffect(() => {
    onBillChange({
      billAmount: amountInput,
      billTipPct: tipPctInput
    });
  }, [onBillChange, amountInput, tipPctInput]);

  return (
    <div className="col">
      <div className="form-group">
        <label htmlFor="subtotalInput">Subtotal</label>
        <input id="subtotalInput" type="number" value={amountInput} onChange={e => setAmountInput(e.target.value)} min="0.00" max="100000.00" step="0.01" className="form-control" aria-describedby="subtotalHelp" placeholder="Amount" />
        <small id="subtotalHelp" className="form-text text-muted">Bill amount before, tax. Never tip on tax.</small>
      </div>
      <div className="form-group">
        <label htmlFor="tipInput">Tip</label>
        <select id="tipInput" value={tipPctInput} onChange={e => setTipPctInput(e.target.value)} className="form-control">
          {R.map(pct => (<option key={pct} value={pct}>{pct}%</option>), tipPercentages)}
        </select>
      </div>
    </div>
  );
};

const tipPercentages = R.range(1, 100);

export default BillInput;